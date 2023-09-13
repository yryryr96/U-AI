import * as THREE from 'three'

const portalShader = (time: Number) => {
  
  return {
    uniforms: {
    time: { value: time },
    color1: { type: "vec3", value: new THREE.Color(0xCCFFFF) },
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
        vec2 offset = uv - uvCenter;
        float distanceSquared = dot(offset, offset);
        float rotationAngle = strength / (distanceSquared + 0.5) * mod(time, 4.712388975);
        mat2 rotationMatrix = mat2(cos(rotationAngle), sin(rotationAngle), -sin(rotationAngle), cos(rotationAngle));
        return rotationMatrix * offset + uvCenter;
    }

    void main() {
      vec2 scaledvUv = vUv * 2.0;
      vec2 swirledUVs = swirl(scaledvUv, vec2(1), 15.0);

      float dist = distance(swirledUVs, vec2(0.5));
      
      float pulse = sin(time - dist * 6.2831); // The constant is equivalent to (Pi*200)
      
      if(dist < .5){
        gl_FragColor.rgb = mix(color1, color2,(pulse +1.) /4.);
        gl_FragColor.a= .7;
      } else {
        gl_FragColor.a=0.;
      }
  }
  `
  }

};

export default portalShader