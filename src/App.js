import React from 'react'
import HelloWorld from './1_HelloWorld'
import Counter from './2_Counter'
import Formreal from './3_Form'
import Listitem from './4_List-item'
import Togglebox from './5.1_Checkbox-toggle'
import Toggleradio from './5.2_radio-toggle'
import Apicall from './6_APi'
import Timer from './7_timer'
import Todo from './8_to-do'
export default function App () {
  return (
    <div>
      <HelloWorld />
      <Counter />
      <Formreal />
      <Listitem />
      <Togglebox/>
      <Toggleradio />
      <Apicall/>
      <Timer />
      <Todo/>
    </div>
  )
}
