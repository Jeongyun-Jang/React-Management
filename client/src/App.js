import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'; //tablebody에 각각의 모델이 저장되어 보여짐
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width:'100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  },
    table:{
      minWidth:1080 //최소 1080 픽샐  화면 사이즈 작아지면 so 가로스크롤바 생김

  }

})


const customers =[ { //배열형태로
  'id': 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': '쩌유',
  'birthday': '970111',
  'gender':'여자',
  'job': '개발자'

},
{
  'id': 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': '쩌유',
  'birthday': '970111',
  'gender':'여자',
  'job': '개발자'
},
{
  'id': 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': '쩌유',
  'birthday': '970111',
  'gender':'여자',
  'job': '개발자'
}
]

class App extends Component {
  render(){
    const {classes} = this.props;
  return (
      <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>

        </TableHead>
        <TableBody>
        {
          customers.map(c=>{ //customers를 C로 순회! 반복처리
            return(
            <Customer
              key = {c.id} //모두 다른값을 가지는 id를 KEY 값으로 설정해 사용
              id={c.id}
              image={c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
          );
        })    
        }
      </TableBody>
      </Table>
      
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
