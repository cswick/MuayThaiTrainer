import React, { Component } from 'react'; 
import { Alert, StyleSheet, View } from 'react-native';
import { Container, 
    Header, 
    Content, 
    Form, 
    Icon, 
    Item, 
    Input, 
    Label,
    Text } from 'native-base';
import firebase from 'react-native-firebase';
import { Cell, Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

  class ExerciseTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['Name'],
        tableData: []
      }
    }

    render() {
      const tableData = [];
      const filter = this.props.filterText;
      if (this.props.exercises.length < 1){ 
        tableData.push(['No records available.']);
      } else {
        this.props.exercises.map((exercise, index) => {
          const rowData = [];
          const exerciseName = exercise._data.name ? exercise._data.name : exercise._data.moves.toString()
          if (exerciseName.indexOf(filter) > -1) {
            const exerciseType = exercise._data.type || '';
            rowData.push({name: exerciseName, id: exercise.id});
            tableData.push(rowData);
          }
        })
      }

      return (
        <View style={styles.container}>
          <ScrollView>
          <Table borderStyle={{borderColor: 'transparent'}}>
          
            <Row data={this.state.tableHead} style={styles.head}/>
            {
              tableData.map((rowData, index) => (
                <TouchableOpacity key={index} onPress={() => this.props.onClickRecord ? this.props.onClickRecord(rowData) : ''}>
                <TableWrapper style={styles.row}>
                  {
                    rowData.map((cellData, index) => (
                        <View key={index}>
                          <Text widthArr={[80]} style={styles.text}>{cellData.name}</Text>
                        </View>
                    ))
                  }
                </TableWrapper>
                </TouchableOpacity>
              ))
            }
          </Table>
          </ScrollView>
        </View>
      )
  }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);

    }
    
    handleFilterTextInputChange(text) {
      this.props.onFilterTextInput(text);
    }
  
    render() {
      return (

    <Container style={{height: 90, width: '100%'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Search for Combination or Exercise</Label>
              <Input 
                onChangeText={this.handleFilterTextInputChange} 
                value={this.props.filterText} 
              />
            </Item>
          </Form>
        </Content>
      </Container>
      );
    }
  }
  
  export default class FilterableExerciseTable extends React.Component {
    constructor(props) {
      super(props);
      // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
      this.state = {
        filterText: '',
        exercises: []
      };
      
      this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }

    handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    render() {
      return (
        <View style={{width: '100%'}}> 
          <SearchBar
            filterText={this.state.filterText}
            onFilterTextInput={this.handleFilterTextInput}
          />
          <ExerciseTable
            exercises={this.props.exercises}
            filterText={this.state.filterText}
            onClickRecord={this.props.onClickRecord}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff', height: 400 },
    head: { height: 25, backgroundColor: '#808B97' },
    text: { fontSize: 13, paddingTop: 15 },
    row: { flexDirection: 'row', height: 50, borderBottomColor: '#000', borderBottomWidth: 1},
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });
  