import './App.css'
import { Map } from './components/Map'
import { SelectedStationsList } from './components/SelectedStationsList'

export const App = () => {
    return (
        <div className='app'>
            <SelectedStationsList />
            <Map />
        </div>
    )
}
