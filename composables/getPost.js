export const useGetPost = async (id) => {
  const GqlInstance = useGql();
  const data = await GqlInstance('GET_POST', {
    id
  })

  return data.post;
}
