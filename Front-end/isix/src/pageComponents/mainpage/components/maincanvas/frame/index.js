import * as THREE from 'three'
import {  useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useCursor, MeshPortalMaterial } from '@react-three/drei'
import { useRoute, useLocation } from 'wouter'
import { easing } from 'maath'
import portalShader from './portaleffect'

const Frame = ({ id, name, bg, width = 3, height = 4.85410196625, children, ...props }) => {
  const portal = useRef()
  const shaderRef = useRef();
  const [, setLocation] = useLocation()
  const [, params] = useRoute('/theme/:id')
  const [hovered, hover] = useState(false)
  const [time, setTime] = useState(0)
  useCursor(hovered)
  useFrame((state, dt) => {
    if (portal.current) {
      easing.damp(portal.current, 'blend', params?.id === id ? 1 : 0, 0.3, dt)
      if (shaderRef.current) {
        shaderRef.current.uniforms.time.value += dt;
      }
    }
    setTime(prev => prev + dt);
  })

  return (
    <group {...props}>
      <mesh>
        <roundedPlaneGeometry args={[width + .2, height + .2, 1.5]} />
        <meshBasicMaterial color={'white'} />
      </mesh>
      <mesh  name={id} onClick={(e) => (e.stopPropagation(), hover(false),setLocation('/theme/' + e.object.name))} onPointerOver={(e) => (setTime(0),hover(true))} onPointerOut={() => hover(false)}>
        <roundedPlaneGeometry args={[width, height, 1.5]} />
        {hovered ?
          <shaderMaterial ref={shaderRef} attach="material" args={[portalShader(time)]} /> :
          <MeshPortalMaterial ref={portal} events={params?.id === id} side={THREE.DoubleSide}>
            <color attach="background" args={[bg]} />
            {children}
          </MeshPortalMaterial>
        }
        
      </mesh>
    </group>
  )
}

export default Frame;