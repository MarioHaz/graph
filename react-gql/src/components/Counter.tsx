import { useQuery, gql, useMutation } from "@apollo/client";

const GET_COUNT = gql`
  query ExampleQuery {
    getCount
  }
`;

const INCREMENT_COUNT = gql`
  mutation increment {
    incrementCount
  }
`;

const DECREMENT_COUNT = gql`
  mutation decrement {
    decrementCount
  }
`;

export default function Counter() {
  const { data, loading, error, refetch } = useQuery(GET_COUNT);
  const [incrementCountFunction] = useMutation(INCREMENT_COUNT);
  const [decrementCountFunction] = useMutation(DECREMENT_COUNT);
  const handleIncrement = async () => {
    await incrementCountFunction();
    refetch();
  };

  const handleDecrement = async () => {
    await decrementCountFunction();
    refetch();
  };

  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return (
    <>
      <div>counter{data?.getCount || 0}</div>
      <div>
        <button type="button" onClick={() => handleIncrement()}>
          increment
        </button>
        <button type="button" onClick={() => handleDecrement()}>
          decrement
        </button>
      </div>
    </>
  );
}
