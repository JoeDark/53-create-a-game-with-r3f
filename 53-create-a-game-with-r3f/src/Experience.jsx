import { OrbitControls, Sky } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.jsx'
import { Level, BlockSpinner } from './Level.jsx'
import Player from './Player.jsx'
import useGame from './stores/useGame.jsx'
import Effects from './Effects.jsx'

export default function Experience() {

    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame((state) => state.blocksSeed)


    return <>
        {/* <OrbitControls makeDefault /> */}
        <Sky />
        <Effects/>
        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Level count={blocksCount} seed={blocksSeed} />
            <Player />
        </Physics>

    </>
}