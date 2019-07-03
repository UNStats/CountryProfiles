import { ReactComponent as Icon01 } from '../assets/goalThumbnails/Color_Goal_01.svg';
import { ReactComponent as Icon02 } from '../assets/goalThumbnails/Color_Goal_02.svg';
import { ReactComponent as Icon03 } from '../assets/goalThumbnails/Color_Goal_03.svg';
import { ReactComponent as Icon04 } from '../assets/goalThumbnails/Color_Goal_04.svg';
import { ReactComponent as Icon05 } from '../assets/goalThumbnails/Color_Goal_05.svg';
import { ReactComponent as Icon06 } from '../assets/goalThumbnails/Color_Goal_06.svg';
import { ReactComponent as Icon07 } from '../assets/goalThumbnails/Color_Goal_07.svg';
import { ReactComponent as Icon08 } from '../assets/goalThumbnails/Color_Goal_08.svg';
import { ReactComponent as Icon09 } from '../assets/goalThumbnails/Color_Goal_09.svg';
import { ReactComponent as Icon10 } from '../assets/goalThumbnails/Color_Goal_10.svg';
import { ReactComponent as Icon11 } from '../assets/goalThumbnails/Color_Goal_11.svg';
import { ReactComponent as Icon12 } from '../assets/goalThumbnails/Color_Goal_12.svg';
import { ReactComponent as Icon13 } from '../assets/goalThumbnails/Color_Goal_13.svg';
import { ReactComponent as Icon14 } from '../assets/goalThumbnails/Color_Goal_14.svg';
import { ReactComponent as Icon15 } from '../assets/goalThumbnails/Color_Goal_15.svg';
import { ReactComponent as Icon16 } from '../assets/goalThumbnails/Color_Goal_16.svg';
import { ReactComponent as Icon17 } from '../assets/goalThumbnails/Color_Goal_17.svg';

export function getGoalIcon(goalId) {
  switch (goalId) {
    case '01':
      return Icon01;
    case '02':
      return Icon02;
    case '03':
      return Icon03;
    case '04':
      return Icon04;
    case '05':
      return Icon05;
    case '06':
      return Icon06;
    case '07':
      return Icon07;
    case '08':
      return Icon08;
    case '09':
      return Icon09;
    case '10':
      return Icon10;
    case '11':
      return Icon11;
    case '12':
      return Icon12;
    case '13':
      return Icon13;
    case '14':
      return Icon14;
    case '15':
      return Icon15;
    case '16':
      return Icon16;
    case '17':
      return Icon17;
    default:
      return Icon01;
  }
}
