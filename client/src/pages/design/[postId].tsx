import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dottoPostDetailApi } from "@services/api/dotto.api";
import { useEffect } from "react";
import { DottoDetails } from "@components/dotto/details/DottoDetails";
import styled from "styled-components";

const DesignDetailLayout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const DesignDetailPage = () => {
  useEffect(() => {
    dottoPostDetailApi("qblC").then((res) => {
      const { data } = res;
      console.log(data);
    });
  }, []);
  return (
    <DesignDetailLayout>
      <DottoDetails />
    </DesignDetailLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const { postId } = ctx.params as { postId: string };
    const result = await dottoPostDetailApi(postId);
    console.log(result, "무엇??", postId);
    return {
      props: {},
    };
  } catch (e) {
    return {
      props: {},
    };
  }
};

export default DesignDetailPage;
