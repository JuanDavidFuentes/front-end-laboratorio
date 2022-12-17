<template>
  <v-container class="mt-15 mb-15">
    <div v-if="this.$store.state.token">
      <v-row>
        <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
          <v-btn class="mt-n3 ml-3" outlined color="red darken-3" @click="Volver1()">
            Volver
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin-top:3px">

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Setup</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Setup()">
                    <v-icon>mdi-server</v-icon>
                    Ver información
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
                <img height=90%
                  src="https://w7.pngwing.com/pngs/992/69/png-transparent-computer-icons-gear-car-gear-wrench-black-and-white-%D0%B4%D0%BD%D0%B5%D0%BF%D1%80.png"
                  alt="John">
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Ciudades</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="AggCiudades()">
                    <v-icon>mdi-city</v-icon>
                    Ver información
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUaEQ2HVBSGk45uNUTgI8xRErCwsTTieMfA&usqp=CAU"
                  alt="John">
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Ensayo</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="ensayo()">
                    <v-icon>mdi-beaker-outline</v-icon>
                    Agregar Ensayos
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv3qtlvC8AE41rrfyFlkfKn8KfWCOxrW8LA&usqp=CAU"
                  alt="...">
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Bitácora</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Log()">
                    <v-icon>mdi-book</v-icon>
                    Ver movimientos
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
                <img
                  src="https://us.123rf.com/450wm/denysdrozd/denysdrozd2008/denysdrozd200804351/164282913-icono-de-vector-de-libro-de-escritura-s%C3%ADmbolo-de-ilustraci%C3%B3n-de-cuaderno-de-bit%C3%A1cora-signo-de-cuader.jpg?ver=6"
                  alt="John">
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Calidad</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Calidad()">
                    <v-icon>mdi-pencil-box-outline</v-icon>
                    Editar versiones
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3 calidad" size="120">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADRCAMAAAAquaQNAAAAjVBMVEUAAAD////l5eXk5OTm5ubj4+Pr6+v4+Pj8/Pzy8vLt7e329vbx8fG8vLyysrJ4eHhQUFAvLy+Xl5dXV1e7u7ufn5/Ozs5lZWWnp6eCgoLa2tpfX1/d3d1AQECRkZHU1NTGxsaBgYF5eXk6OjpqamokJCQPDw9FRUUaGhqampqsrKw0NDRLS0sqKioXFxfV9anzAAAXsElEQVR4nNVd63rbqhI1EkJIKHaSJk7sJI5zadJ2d5/3f7zDXVwlhOXL5kfna+xlGKFhYGYBC0BLCSGkApewaKmsC1h0VDZUEio7KmsqEYQlBqBdff16q6Ow+4/F9RXwYQC264fFzS2G4drw7t/F0zYAo9JuJEQGjDiNbIsR2GKyxmjBC47AnvindwGN0Z5/9NGFa/vmn64vReOSt4H/2IPQeBeEkbX4dOHB6M/9Iz56RKHaluLDm17jaNOLPI0FrOQaF0J/TKVsA+Qa0y/zH4P6qRcYSJU+grB6Iz9+dmH06/Kjz1a0wa7tU35aK1grYbQRhWxkAAaI08hR2KIsS/5JVZa8+VSyT0hVVg37ISr5D5VlxX+IyJa9dGUAht/kx6/QhtFqFPIhVFv7oB6VA6tkLao26DSSdw2VJAAre3gPW0DfPFr5sjShl0Vr3IRgeKM15u8ahfEnjlhP9Br7tXVK46q2YaXsqEK+ovKtshqpzC8JZmgs33NP4zKscVcEYIbGJTFgiLXJ6GMJU7ZMSk9jBXOa7sA8jcdhC0QLpgUi1FJRQwQ7KgmVDZUdlYTKFiFYU4lqpTEJwXqNJQxKGC2N1jhQW6M1JrJWCYOyFjjQyEY2UsFa+XUDjjRsETCPmkrXPPgQxM1CaWzBkITpkYt+sTNg9sjlwWhtSuPWhUHfGA0Yt2U+cqXCpvvjXuMAzBqrHcfqjtV2bb3Gp/HHhdWGUmtc+v7Y1NiDWX3s+ONe41BtpsYWDBaq6YU74HTClgONHIAt5PvOzYNKbh5SNlRy85CSmgeqe41DsL6PHRizJmXHTaA2rTFqHFgrBxqjttZpZGM0shuDLYpC+uNCvueFdHVFyYZB9sPs40bKFsuWfdf8/6xeKdmTBkrjbcs/VnDWDoX89GEYETUDgS6Md5Tyx4U0SruRTVnIAafgNoyolLDKgw35Y/oj7d3tyi7vsmW/3leB8v6i1Ap8LD+6CSHfbxTQ+2R3B7t2Rn9cFPI9L+R7XihX17b3ciZ89vJz98xfCdlIrBup+1h6/0L640JoLKUFW7S01LRQ0VFBlOzI7tx6WuWd2qLXSCobKhsqCZWdIaVOvm6LgHkwW67hz3Pr6JZ1qxqpBpxO9rPwx4X0x4X0x4Vrw4P+uN2fW79AWTaz+eOqt2XhIeXi/dLKH3vAcftY+uNC+mPVx844tSC0dLSYsqnOrVukbGursQ1rqyFDuniSjdWuP+7ApYzRbvlqxaCr/LE7Vrv+WI7Vqp+j/pgsz61ZtGzaWfxxIfTX/ph8nVuxeEHSscb6WPnjYB9z2KLxSn25XbxY3Nd+g6eVhfeeAxmAvczyDxgbq5U/dsZq/Q6H/LFVxQ6y8CAPMbBglbFaFKF2FlqAkC9LoBXLxJ0Bo6sZvVp8aDUMSZi5dnJh299We9jX5/PHoo9bs4I9/zFzuqo17peeRWR97Mxy5Ud6faxghbU+boresTIYbNdmg9ZQOpXJfSxhC89fkTvj9x+A6+60xth1d+xrfZyrcb1ko57kAw44Vaw0hsRzrsCc4T/isC9O9MkN8cdqZA5cV0Q+OrUscWKZoNLLkjIcy9QzICuWWbmLoNaJZVqD7qvRoluQtHbi/Vt4Y3UR8seWxnuSGa9ezxmvNqeAt3P5437O5WgslyRqOuP3cWnOgnROYi3D3P1KxuljC2bkJCoHVoU0njznMmMg3voRm3Z8VzvLTtLnnUKrVT1ybbENoxIpjUlgkatdYuMvdrutqTHx18Yja2S7toV8FsboeWX8/rKWY3W/LPkrPlkFlly0HxW4dmH0/79km5EXdaGD7qMEejDqEEw73iEL1o/VHiy2drJ9VkRjM4Isq4eRMLdYhOw8GH3n/ggkCkfHxYd/QvljW+N5/LEZA/E0bu3wAnOPXxUIhBeYh8Ts9dzxPnWjElzl7xaGYLSWD/rpYyiY4fbxgTEQFgvCzMq4xAR1tndqW0To36lZIPotzMwBPFfAg9G/C0nQlo4lPoxK+rSeawNWGzA6QsAtbnoY0TD8bNoxsGENlWZtPYxLs7aaw/xYpuOPC8cf9+HBQko7BFoUyqpC0UXqLkyY4VilmwnCvLE6DRaJZQ774yvXH6N4FshNO0c8ZAZsXn/scQSg449LN9nvZu2D1IJ8WCDZ7/tjDRNJUAeGBjkCMjeDdG4GmP54WYdTOVZaNpAJcjNA9TQYsWCtNXJ1w3mnkdrorED0ejHincbSdk5KMkAROgTmeCc7t5heW64/DhKHEohvB8CO4I8tjkDAH5scATogRLP2FvPG4wgMw+LJfkfjCKxK5QiosVqFFqAzVku6VMvjH2IRJB+hDevZVXwIMmD1MKw1YE0YZvvjZFi4Np/rM+ydevMYowgF2TdlhLQzDDPH6isbxjWcxvX5j/ljkXtSMET2t79vl2U3pz92OXtRx1oNUv3SYbzpVcQfL2V+UcCwCvo9yLe6GuPsUVggsje2kggFzeRqUc4HJsbaxkJ0/ci1N5cEaPurbygkyZE9xyiP4Z3ibNhEmNJ4CYyRA5kj+GLxjNK4tyG2cVzjg5t+mMbLzmg6sBVmKk/SeGzOFWl6cUqNl53Z9O3CLc8oTeNzj1wetzm2ktgDYwhCa09hRgUbHbmC2dQL9U5LWSt/UMh9pXtbzmAbexqXlzADWbYGDIR6mJUtSp2BsFUVm4Gx/FfrzzIxFhM4KvkEjkoPxmaZWM77MOjGYSgAa4IwOsu86wyYN2gZKrcjtSl/PNdKosxbSYzQhuH+atSGVSm6DLbx5a0WCxM2qDC35cls4xkiAqn834xAQtSGe5Wnso3DUR8noDKF/zsfjMoBG1Zl2zkhKjvGlBvZK1DHBlfQNR2REhsSU8n+W0tJpOyaxoWxXwctKgciez3bGO5HFV4sqvYY/ni9up6zPN13I25c2HK7iepp9jKaxDZ288fBCP1VtLbc8pd3eSTU3ucDukSVp7CNvSyMlaQUXwfRuvLLEvspUaNxStZpKje1D4+yjUfXx0WSNU0tn21ayiytl6t2Ats4wR+PD5jTy1s77Mb1gNMkUd2VLaewjUcy5syWmyNQVRltaSj1/dqpRnaJKqeyjR1WRJg0hP6dW+E/eJCiRCceG82nAmkqk0S2scd8cSks/NG1V8vl1dXV3XLpyTsqlwMyCHtuhT+2KSyqtpJz+m81YSatlys11I/s/knzx4XcicT2TkrJ46pyAxObSHGeAEJQzDCERDHY8LJabmLYNdKxJtryK0piG0f62LGqUr8aFoNN8Y06h1M2FebQhveyORuiYGm9LB+YzzbmxEAh6T+2Heu/S9ohlcbXSac/HpXElwkwWhvuFw8boD7GKSqvsF9bYrxajZ7niFdb+3J29DURsKRexueJVx8G6/aWDsqW6yLFll+T2MYX1sd7R4lNo7g2Cb18N8w2Ft7QseNxQm+M9zsLDPsBgA1Q8HG/vCRebZc9Vof31nFb5rDRXl5De6y++GyqY8O6l4mCjdkyymIbB+dclQ1z+b9dBGbwf2Mwc86lFH7a3FiKvDUKNtzLqy4w51LWVSvpzatraYR1Z8jahUlzqbURHg6rlcJrgB2TlbZck3rQL8ParzVv7eQReYNjdSr/1xmrFUzb8JpPTG1dmC0Lrs9AL9+Gartcf0x6hTnM2YXFbFmwm5rbiMI/ggNOVgwkFl7w/HEa/zdMG+4VFrBfjj4rImFlF1b5bxusLS/OFdmwHt/nPhnW9zDmX6/9d/cNKBgOqXwNcDjOlRfLHGAbi0F3NCgZZBtrmGPDZfc7oNOGBSs5nyvQy9fgP8U2rpVlSRsOKsyclGIbeypfy9pOwTbWyYVMGLFsWMDCCi8W741iG3f3tsLi1RhiG4/lneppCaQwbTgx79QohV8B/3odU5jbsoRh80vXwElXmXkn0etZucV5/bH2TtqGX3ngCEZeaaWyghlfuzYaOSvbmC9fhKylxELybBomQtZSEikjsMa14VeRFo26W1HeG+XG9Re5Hx7OH0/nCLTrh5ubf2i5ueHyZkD+E5f6a9+/NUeg72ExBAwrTP1yI924suUfInY4zDbWhA4Q5IEAj5kx/8b7G8x5II3uYcBrG+lhVt4k2xgLnuYPMMIDyWMbz66wON6ka/tXmju1yHTKLhusfCG15R/gKGzjY+SdPlkreoW5GycpCrMJp/L+HXtux2Abw2jl+WVj2jBMs2FVVo2iFsBxzl6Wd2q+Z1VWatmpmcCrmJgmvdKivB1pL0xP8kQv0cozyx3uFeaU0jQbVuUNj+6FOYxtXIDtXTxtNphlC8L29Hd7hXltgdXSUFk1UzS28jIBjSPxaqjTZnwfDGYnkwK+nUbs16CSh+egzrLBAZiqdotEbVN6mJXPdnCG15+Acm62sYS1lg23VVomzSzXKfskLodtrG14i4RjnazwU7i2LLbxCfY7mTZMptuwVHjifid4vj1t/QJ1iwRsusJd+p427z0//b5FHVl75eNkhg0/Tdm36LyiZ4jeGn5YLHSzXulDzjY+8f5j45XmsKTkv6fw9LONJ+4xDwdURveYB2C6uueWw6bb8AMZiTHNwzae6xwBbcNbkmnDD1PPETivP+4V5iynDBt+MOwo82zjg88DmRCh17EU6od5DGy6DYsQ2dSzjc1TWMJZGCyPQtLHqSAXxk9hEekUcQpLEGbX1ttwx2EZNly7tQ2c+SIaec5Mm23DpMx6pec42/hU/tiwYQ7Ls+E5zjY+UcYc9ArzBwWSmOKWwhjknM/Fs42dyqRGzmDr1GloWnowIUVKtJcWrDNgRCv83PCvZ9nwUG26kZ3dyHMxX/pXuhE2PL2Hc8/ZO48/Nmw4jZgVUnius41PwmDTrzTisAwbrkGgj5POy3R4g2SApTh63GjqKaVa4Yrwr01X+BPnn4lqPoMxJupMp2N08ojBxbbjsOk2/JlyqMblnI7RK4zE+jhH4VnPNk6O3rKBX0oiZMu+hqlkX2NuCPBhSchOyl5h/tQzbTj//GrvDO/ArgG/4O3qR26RP12Jn86wYZB+IHmgJI/VpTXojm17Hi/P/GCePBs+7Bz6PH98uMLiCP08Gz722cb25Ik/vkPzx19bKGz4bfy7jsIE+DO8aXOunF18jX/EzLRSiYPGcUYPH35niP2ep+7UPCyZ+owOsuED74XJ88fVIZdsPCMxt57+SgN7Jn+qs40BN/314+M9LY+PQRn481IefP31DHltGTbcgHGSctrZxhb/txlkG+ujv6nxsHBwQyxZU1kbkv6VUwhJo+bSX5WgD+PJCq+Cp6JPv8PrNGxj2DyqHhYc0SZD4RBJOeOettOsj0mvMH+j82x4rrv4nPsW3ZyEc9dAH+YPxkAqvT62YFphKHIS0xXu/AGH1yZXaxPuWxxmG98lnnIzfBVnrY7VryR9OOOVnno4TvxOTdHrRz3JSNtwBYUNvwe1GlQ4kCTMvTfVNspjrI/r3obF+jhLYVUbmMcfH/VEMqnwL2rDHDZd4c6obQ0Pvf+Yn2XAz/KG4vpol21sXVZN+xkJIq8Li1yNDftRGnAYyXFL7I5rXhtZ7UDCHdd9I6FspLrjusXHO1lQeMh5bFi5GWoQt4YdBbzT2c82xmqLyvYgG1ZNX53iroH8oz4ZTCn8VQvYKqTUoMKdURt7XM5dAxa7KHCQWYRtXOhnAINjNdRjdaGZqKBPMAgY62doj9Wk34TEYc10hY3aCEfvWrs2PVbLRrbxRk7i3tquLtE7Ncauqz3zy5Nf6Xejtk48Ln3XwGTvlMM2nuaPa2ub2WO1n3yrIbdhVZt8P/I1Pv5dAwdfN7vqDKNUBnH4XQOpI1c1lW3cTn6HnfJu1NaPALdObdbIlXQq+9G8UxtQYkp5M2rr+iHvcO80lW0cGRC8GQg68LhFbsNqKmGM8fPNQIpIH/e0YfX4woO+fadFB9NOtoyW907VhgM3aBTRGzRcN2o2UrjR441cByn8Zg5B0Mz5HD5yOa/obN7poCD+m12brfEcq8WpEYHIyfsW23gyscMo7wBYS3tH4wNvO8K4v/UJRtnGUAZSoAykQA/G124iDsO38/wvX+E34tRmaSxvtKqN2mTUB8qoDwzcaIWhgh2JbdzIRt5lbPd782obuLUsuJI4B9u4lvuzunZyhmoDPMc678100H3PxyICToTe8celaAMQZy19EsgvjpxQ2KA1dNuR5Y9LrXEZ9MeqsZY/9qKbDtt4eAuAG0tVJzeUAn7HbpycpPKmDtRm3RQL7HhxM75PoUZmmHlqpo0/ulG2MZLLJr77aIrKm1DKzBmrnUxbdRFsY5lf/sGPXG+7ZFvehGs7gj/OYxuXHttYaFxCOS18lDvMUocvbsOB24CdPj7wNuCpNz6nHMCkApiok7xfkqTyhtOH/do66x7zxBufg+c2JbKNQ/dsj7CNrzn4u4el0CikDQfONp73Vu9j+GN5Y/mj4SHHbVnZcMCxHuXm9mjGfIRtHMxhy19ABgyOqSxsOEwbHrgNOJVtbGTMPfYPMTXOYhvLI/FegAWrByecO48+3P96bfljPJXbnMc2nnIXH5HTj1tkc0O7AZV3g3fxBf3xBbGNFZV1Cx1YXOUd8JOwR/XHmWdFGERes4/xJ4fekMKBRW15Y23j8WqL+eMYg20q27hOYRsPlVo2LQDFQZV3I/RhYtlxRousYvjjMbax++giO0OgfEfWAZIyCPXybvQc+sBYfXK28YA/bmWolV9t43nI7m9A4dPe3J7FNh6acxGF/Q7ASm/42pjbeLz7JCJ9PDbnivRxkG3ckDrlzpD4zp+6H2ZecODrWE5BdQ+P04Yba15dn4JtPE7kNcZqIzL/0jiLIAjw1afzSo/ThqeO1UdhGw/4YzOI+QIMWEuqR6t/hQ0nbOI9hj+eyjaOx0DsyPyLgLG6y9/eOL2rNWyANhyZcyWzjQsnBuKtHxPZxi5MyIY46aaXumWnYW5v7WPVWfm5B2m0YTvOhY/NNvbXToNs4/ano9cL7fad+8fF4muzBv4iKLB2CscyL4dtXPu7ZG7co7Zp796uabcAd1l9Mn88kW2sbTjkj4NnZztP4B6ypx8lKU+JgVS6jyNs41AMhJqJPD2CS59tXOMOtYhgeeiElNiF1ZhQiUeuM/v7B4HOgyEmGyobo7aur83yx00yjDZSHeNh1JYZyyx9GLNlOJhDffozFAKNByVzY5luI4/hj1H84OXPPer0DR5Jm3iP6o/n4gjEQparNRjI2o/efxzhCBzANjbzq6gN5p3G0rJiw0GI3/O1ewX8vjbzoCvobziIJJDEHdd9Scw7BWvjKed52cZ/XHV/7dZ8M/bYPealQ1KeKbd4fLaxPW3+vm8xcq7wyzpUY15/PCvb2ED+vUfJMIukHKANT+UIjLONoXwGMMo2dg9lLHwYqKHOmz4tSQ9rx2CSpCxJWT7M5oG0NoxEYEhuJFHvsK5tXrYxnyqs7lA3BTZ2IKHnnQa5PqPkwpn9cXv1yh7nzHfVn94fV3knhFaJJ4SOke8O5ewVVm35K4lwZC+yb9GAlSOwiSuJwX2LGdnU/eF7U13vVBgw181EYC4TdYB7O+idXH8cmoHc1rls40GN7TaMwsyJzf2wxuO1+X1sWc2iRVrjrGsEHZKyrE3vvpE+YwDGajNDKPvAqzFtBsLfc2vkIqbGH/SDmi412dcaKVslWa4Y8HtgaimxlExgKVkUSmpbsB31ldCaPSTeDraADcBqeQxQU1lpDGqLs7ONgc2/+n56enh4eGJFSvrvj6en6+vr7++Xvy8vH//S8tOP7RxQfv38+fHxff2D1eakbUAxh3dyaMP34WZcRNmYvMg0trE7A+GrKfOmGAzQudUaKFt5ZQ8Ws0zGcYaMbSxmmVhc2YP1lT1atx7mryTKsp682e5k5S8xBpzMlYQ/VhcdGa/6TGU7w1kRHtuY/XX+65vmKbs2GEiIs431zgGbbewzcqcfjHaS8kCSg0XuYeou29jyxzxEd4mm/INYjjU3shfwx8yWE5ILpy4r4g04+f44FDN/9dNj5yxfd417aWFmhD6SGmUnL/25IJ0fzRSplb+VGdWBTKoN85kvPamkBs+Pnx+HnD02S/lY3e8JGlqNT1of/x8frOfZ3NQnkgAAAABJRU5ErkJggg=="
                  alt="John">
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
          <v-card class="primary" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">Color</v-card-title>
                <v-card-actions>
                  <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Color1()">
                    <v-icon>mdi-invert-colors</v-icon>
                    Editar colores
                  </v-btn>
                </v-card-actions>
              </div>
              <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
                <img width="50"
                  src="https://w1.pngwing.com/pngs/448/211/png-transparent-graphy-logo-palette-color-paint-black-and-white-line-symbol.png"
                  alt="John">
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-if="this.$store.state.token === ''">
      <v-row>
        <v-col cols="12" class="mb-16 box2">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <img height="450"
                src="https://cdn.dribbble.com/users/272763/screenshots/4576659/media/e7b35df88e9ab2a2ec158aaad703a7e9.gif" />
            </v-col>
          </v-row>
          <center style="margin: 5vw;">
            <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie sesión
              nuevamente!</h1>
            <p>
              <v-btn rounded color="green" to="/" dark>Iniciar sesión</v-btn>
            </p>
          </center>
        </v-col>
      </v-row>

    </div>
  </v-container>
</template>

<script>
export default {
  name: "PageConfiguracion",
  data: () => ({
    show: false,
  }),
  methods: {
    Volver1() {
      this.$router.push("/Home");
    },
    Setup() {
      this.$router.push("/setup");
    },
    AggCiudades() {
      this.$router.push("/AggCiudades");
    },
    Log() {
      this.$router.push("/log");
    },
    ensayo() {
      this.$router.push("/EnsayoLab")
    },
    Calidad() {
      this.$router.push("/Calidad")
    },
    Color1() {
      this.$router.push("/color");
    },
  },
};
</script>
<style>
.calidad {
  width: 50px;
  height: 50px;
}
</style>
