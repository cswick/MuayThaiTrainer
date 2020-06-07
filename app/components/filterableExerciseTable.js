import React, { Component } from 'react'; 
import { StyleSheet, View } from 'react-native';
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
      this.props.exercises.map((exercise, index) => {
        const rowData = [];
        const exerciseName = exercise._data.name ? exercise._data.name : exercise._data.moves.toString()
        const exerciseType = exercise._data.type || '';
        rowData.push([`${exerciseName}`]);
        tableData.push(rowData);
      })

      const element = (data, index) => (
        <TouchableOpacity>
          <View style={StyleSheet.btn}>
            <Text style={StyleSheet.btnText}>button</Text>
          </View>
        </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
          <ScrollView>
          <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text}/>
            {
              tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
          </ScrollView>
        </View>
      )

     {/*} this.props.exercises.forEach((exercise, index) => {
        const exerciseName = exercise._data.name ? exercise._data.name : exercise._data.moves.toString();
        const exerciseType = exercise._data.type || '';
        if (exerciseName.indexOf(this.props.filterText) === -1) {
          return;
        }
    }*/ }
  }
  }
  
  class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);

      this.state={
          name: '',
      }
    }
    
    handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
  
    render() {
      return (

    <Container style={{height: 90, width: '100%'}}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Search for Combination or Exercise</Label>
              <Input 
                onChangeText={(text) => this.setState({filterText: text})} 
                value={this.state.name} 
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

      let exercises = [];

      firebase.firestore()
      .collection('combinations')
      .get()
      .then(querySnapshot => {
    
        querySnapshot.forEach(documentSnapshot => {
          exercises.push(documentSnapshot);
        });

        this.setState({
          exercises
        })
      });
    }

    onCollectionUpdate = (querySnapshot) => {
      let exercises = [];
  
      const { name, moves, type } = querySnapshot._data;
  
      //for each combination, make a new list element
        moves.forEach((move, index) => {
          strikes.push({
            name: move,
            key: index
        });
        })
  
      this.setState({
          loading: false,
          type: comboType,
      })
  
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
            exercises={this.state.exercises}
            filterText={this.state.filterText}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 25, backgroundColor: '#808B97' },
    text: { fontSize: 13 },
    row: { flexDirection: 'row', height: 50, borderBottomColor: '#000', borderBottomWidth: 1},
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });
  