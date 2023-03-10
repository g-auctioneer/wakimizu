import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

const WakimizuTable = ({ wakimizu }) => {
  // FIXME: keyにindexを使うのは微妙
  // https://ja.reactjs.org/docs/lists-and-keys.html#keys

  let index = 0;
  const tableCells = Object.keys(wakimizu).map(key => (
    <Tr key={key}>
      <Td>{++index}</Td>
      <Td>{wakimizu[key].name}</Td>
      <Td>{wakimizu[key].overview}</Td>
      <Td>{wakimizu[key].address}</Td>
    </Tr>
  ));

  return (
    <TableContainer m='20px'>
      <Table variant='striped' colorScheme='blue'>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>名称</Th>
            <Th>概説</Th>
            <Th>住所</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableCells}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default WakimizuTable;
