import * as THREE from 'three'

const portalShader = (time: Number) => {
  
  return {
    uniforms: {
    time: { value: time },
    color1: { type: "vec3", value: new THREE.Color(0x99FF66) },
    color2: { type: "vec3", value: new THREE.Color(0x99FFFF) }
  },
  
  vertexShader:
    `
    varying vec2 vUv;
    
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  
  fragmentShader:
    `
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;

    varying vec2 vUv;

    vec2 swirl(vec2 uv, vec2 uvCenter, float strength) {
        vec2 offset = uv+.25 -uvCenter;
        float distanceSquared = dot(offset, offset);
        float rotationAngle = strength / (distanceSquared + 0.1 ) * mod(time, 7.853981625);
        mat2 rotationMatrix = mat2(cos(rotationAngle), sin(rotationAngle), -sin(rotationAngle), cos(rotationAngle));
        return rotationMatrix * offset + uvCenter;
    }

    void main() {
      vec3 colorSum = vec3(0.);
      
      for(int i=0; i<8; ++i) {
        vec2 swirledUVs = swirl(vUv * 1.5, vec2(1.0), float(i+1)*.5);
        
        float dist = distance(swirledUVs, vec2(.65));
        
        float pulse = sin(time - dist * 6.2831);
        
        vec3 color = (dist < .5) ? mix(color1, color2, (pulse + 1.) / 4.) : vec3(0.);
        
        colorSum += color;
      }
      
      if (colorSum == vec3(0.)) {
        gl_FragColor = vec4(.4, 1., 1., 1.);
      } else {
        gl_FragColor = vec4(colorSum / 4., .7);
      }
    }

  `
  }

};

export default portalShader