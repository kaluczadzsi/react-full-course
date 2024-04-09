type ContentProps = {
  data: unknown[];
};

const Content = ({ data }: ContentProps) => {
  return (
    <main>
      <ul>
        {data.map((item: any) => (
          <li key={Math.random()}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
