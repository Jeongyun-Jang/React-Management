import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

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
  return (
    <div>
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


    </div>  
    );
  }
}

export default App;
