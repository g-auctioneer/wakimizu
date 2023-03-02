const Table = ({ wakimizu }) => {
  // FIXME: keyにindexを使うのは微妙
  // https://ja.reactjs.org/docs/lists-and-keys.html#keys

  let index = 0;
  const tableCells = Object.keys(wakimizu).map(key => (
    <tr key={key}>
      <td>{++index}</td>
      <td>{wakimizu[key].name}</td>
      <td>{wakimizu[key].overview}</td>
      <td>{wakimizu[key].address}</td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>名称</th>
          <th>概説</th>
          <th>住所</th>
        </tr>
      </thead>
      <tbody>
        {tableCells}
      </tbody>
    </table>
  );
}

export default Table;
