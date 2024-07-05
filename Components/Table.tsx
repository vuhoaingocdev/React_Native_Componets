import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {
  Table,
  Row,
  Rows,
  TableWrapper,
  Col,
} from 'react-native-table-component';

const TableComponent = () => {
  const [tableHead, setTableHead] = useState([
    'Checkbox', // Thêm cột Checkbox
    'Ma sinh vien',
    'Ho ten',
    'Tuoi',
    'Que quan',
    'SDT',
  ]);

  const [tableData, setTableData] = useState([
    [false, '2010', 'Vu Hoai Ngoc', '21', 'Hai Duong', '6545'],
    [false, '2011', 'Le Thi Mai', '20', 'Hai Duong', '6545'],
    [false, '2012', 'Le Thi Nga', '21', 'Thai Binh', '6545'],
    [false, '2013', 'Vo Manh Duc', '21', 'Nam Dinh', '6545'],
  ]);

  // Hàm xử lý khi người dùng chọn checkbox
  const handleCheckboxChange = rowIndex => {
    const newData = [...tableData];
    newData[rowIndex][0] = !newData[rowIndex][0];
    setTableData(newData);
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.table}>
        <ScrollView horizontal={true}>
          <Row
            data={tableHead}
            flexArr={[1, 2, 1, 1, 1, 1]}
            style={styles.head}
            textStyle={styles.text}
          />
          <TableWrapper style={styles.wrapper}>
            <Rows
              data={tableData.map((rowData, index) => [
                <TouchableOpacity
                  key={index}
                  onPress={() => handleCheckboxChange(index)}>
                  <View style={styles.checkboxContainer}>
                    <View style={styles.checkbox}>
                      {rowData[0] && <View style={styles.innerCheckbox} />}
                    </View>
                  </View>
                </TouchableOpacity>,
                ...rowData.slice(1),
              ])}
              flexArr={[1, 2, 1, 1, 1, 1]}
              textStyle={[styles.text, styles.row]}
            />
          </TableWrapper>
        </ScrollView>
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  table: {
    borderColor: '#c8e1ff',
    borderWidth: 1,
  },
  head: {
    height: 70,
    backgroundColor: 'orange',
    borderColor: '#c8e1ff',
  },
  text: {
    margin: 6,
    color: 'black',
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    backgroundColor: '#999999',
  },
  row: {
    height: 60,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCheckbox: {
    width: 10,
    height: 10,
    backgroundColor: 'black',
    borderRadius: 2,
  },
});

export default TableComponent;
