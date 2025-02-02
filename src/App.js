import React from 'react'
import HelloWorld from './1_HelloWorld'
import Counter from './2_Counter'
import Formreal from './3_Form'
import Listitem from './4_List-item'
import Togglebox from './5.1_Checkbox-toggle'
import Toggleradio from './5.2_radio-toggle'
import Apicall from './6_APi'
import Timer from './7.1_timer'
import Todo from './8_to-do'
import Bgcolorchange from './9_bgcolor_change'
import Routepage from './10_Route'
import Quote from './11_Quote'
import ImageUploader from './12_Image_Uploader'
import LoginRegistration from './13_LoginRegistration'
import WeatherLocation from './14_weather_users_Location'
import ResetTimer from './7.2_timer_reset'
import SearchFilter from './15_Search_Filter'
import Pagination from './16_Pagination'
import ColorPicker from './17_Color_Picker'
import NavBar from './18_NavBar'
import Themes from './19_Themes'


export default function App() {
  
  const items = ['Item 1', 'Item 2', 'Item 3', 'Another 1','Rahul','Betu'];
  return (
    <div>
      <Themes/>
      <HelloWorld />
      <Counter />
      <Formreal />
      <Listitem />
      <Togglebox/>
      <Toggleradio />
      <Apicall/>
      <Timer />
      <ResetTimer />
      <Todo />
      <Bgcolorchange />
      <Routepage />
      <Quote />
      <ImageUploader />
      <LoginRegistration />
      <WeatherLocation />
      <SearchFilter items={items} />
      <Pagination items={items} itemsPerPage={2} />
      <ColorPicker />
      <NavBar />
      
    </div>
  )
}
