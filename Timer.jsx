import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
//import './Timer.css';

moment.locale('ko');

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mtNow: moment(),
    };
  }

  checkExpired = () => {
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);
    // 비교 후 값 리턴
    return mtExpire < mtNow;
  };

  componentDidMount() {
    console.log('componentDidMount');
    if (!this.checkExpired()) {
      this.nTimer = setInterval(() => {
        this.setState({
          mtNow: moment(),
        });
      }, 1000);
    }
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate');
    if (this.checkExpired()) {
      clearInterval(this.nTimer);
    }
  }

  render() {
    const {expireDate} = this.props;
    const {mtNow} = this.state;
    const mtExpire = moment(expireDate);

    //console.log(expireDate, mtNow.format('a hh:mm'));

    const isExpire = mtExpire < mtNow;

    return (
      <div className="Timer">
        <div>현재시간은 {mtNow.format('a hh:mm')}</div>
        {isExpire ? (
          <div>금일 강의 종료 되었습니다.</div>
        ) : (
          <div>금일 강의 종료까지 {mtExpire.fromNow()} 남았습니다.</div>
        )}
      </div>
    );
  }
}

export default Timer;
