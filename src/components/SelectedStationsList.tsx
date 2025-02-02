import { useAtom } from 'jotai'
import { rawStationDataAtom, selectedStationsAtom } from './store'

export const SelectedStationsList = () => {
    const [selectedStations, setSelectedStations] = useAtom(selectedStationsAtom)
    const [stationData] = useAtom(rawStationDataAtom)

    const sortedStations = Array.from(selectedStations).sort((a, b) => a.localeCompare(b))

    return (
        <div className='station-list'>
            <h2>Selected Stations ({sortedStations.length})</h2>
            {sortedStations.length === 0 ? (
                <p className='empty-message'>No stations selected</p>
            ) : (
                <ul>
                    {sortedStations.map((code) => (
                        <li key={code} className='station-item'>
                            <span className='station-code'>{code}</span>
                            <span className='station-name'>{stationData[code]?.name}</span>
                            <button
                                className='remove-button'
                                onClick={() => {
                                    setSelectedStations((prev) => {
                                        const next = new Set(prev)
                                        next.delete(code)
                                        return next
                                    })
                                }}
                                aria-label={`Remove ${stationData[code]?.name}`}
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
