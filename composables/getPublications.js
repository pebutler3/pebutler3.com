export const useGetPublications = async () => {
  const GqlInstance = useGql();
  const data = await GqlInstance('GET_PUBLICATIONS')

  return data.publication.posts;
}
