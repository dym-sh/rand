# rand

> simple wrapper for `Math.random()`


## declare
``` html
<script type='module' src='vendor/rand/mod.js'></script>
```

and
``` js
import { rand } from 'vendor/rand/mod.js'
```

## use

### rand( max )

> random number from `0` to `max`

``` js
const F = rand( 2 * Math.PI )
```

### rand( min, max )

> random number from `min` to `max`

``` js
const age = rand( 21, 121 )
```


## source code
``` js
const rand = ( min, max ) =>
  ( undefined == max )
  ? ( Math.random() * min )
  : ( Math.random() * (max - min) + min )
```


## mirrors
- https://github.com/dym-sh/rand
- https://gitlab.com/dym-sh/rand
- https://dym.sh/rand
- hyper://f4c774bae85cb1490994ec31b59d32eeaaf644cbaf2136185751ee8353476e6b /[?](https://beakerbrowser.com)


## license
[mit](./license)
