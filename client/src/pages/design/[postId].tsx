import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { dottoPostDetailApi } from "@services/api/dotto.api";
import { useEffect } from "react";

const DesignDetailPage = () => {
  useEffect(() => {
    dottoPostDetailApi("qblC").then((res) => {
      const { data } = res;
      console.log(data);
    });
  }, []);
  return <div>상세보기</div>;
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
