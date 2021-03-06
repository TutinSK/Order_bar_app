export const BASE_URL = "http://codetrau.com:8082/order/beerOrders";

export const VND = "VND";

export const digitalNumber = (value) => {
    return Number.parseInt(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
};
export const convertDate = (valueData) => {
    var date = new Date(valueData);
    return date.getDate() + '-' + (date.getMonth() + 1 <= 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`) + '-' + date.getFullYear();//prints expected format.
}
export const randomKm = () => {
    return Math.floor(Math.random() * 50);
}
export const truncate = (arr, active) => {
    if (!active) {
        if (arr.length >= 100) {
            var tamp = arr.substr(0, 100);
            return `${tamp} ...`
        }
    }

    else {
        return arr

    }
}
export const defaultImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhAVFRUWFxYVGBgXFhUXFhUYFRcYFhgXGBUYHSggGholGxYXIjEiJSkrLi4vFx8zODMsNygtLisBCgoKDg0OGhAQGi0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKIBNwMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYBAwQHAgj/xABEEAACAQMCAwQIAggEBAcBAAABAgMABBESIQUGMRNBUWEHIjJxgZGhsRRSI0JicoKSwdEzQ2OiJFPC4RUXNXODsvAW/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAAxEQACAgEEAQMCBQMEAwAAAAAAAQIDEQQSITFBBRNRIjIGFEJhgXGRoRUjM1IkYrH/2gAMAwEAAhEDEQA/APcaAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoDFAKAzQCgFAYoDNAKAUBigM0AoBQCgMUAoDNAKAxQGaAxQGaAUAoBQCgFAKAUAoBQGM0AoBQCgFAKAUAoBmgPkuPEfOhG5HyZ1H6y/MUyVc4/JrN7EOsqfzCoyiPdh8o1txWAdZ4x/GKjciHfWv1I0vx+1HW4j/mFNyKPV0r9SPk8xWv/PU+7f7VG+JH5up9M1tzPaD/ADv9rf2p7kfkt+Yg+v8A4fEvNNqq6+0yPIHI/h61Dtidmnone8QX9+DjfnyxA/xGP8BH3qvvwOx+k6vxHP8AKNLc/wBr3Bz/ACD/AKqj8xE55en61PHtP/BhPSDa53Dj5H7U/MRLx9N1r7qa/lEknNdqV1mQqvmrDPuGMmtFZFmN9FlP3o3w8x2rdJ0+O30NTuRy+7E7Y7+JvZkQ+5hU5RO+PyblcHoR86ktlPpn1QkUAoBQCgM0AoBQCgFAKAUAoBQCgKJzrzy9jcCEQqwKB9RJzuSMYrOUmjg1WpnU8RWSGi9Jcz+ykX+7I+Gaydsvg82Xql6eHEz/AOYsoOHZUHiImYfPVVvcfybR185dSRIW3Nzvv+K2yM4iQD3ZLbVO9llq7e2/8HRLfcS9uMpKh3GWWIgfAf1qd7+DoVtsukRI51mU/po3jGSMsXK5HmOoqN7Kzsug8SRKcP5nSX2pQnXBYvg47x5UzIRnbJ46N8vEMkBJBJqP6mrb/dUfUbRrnLuaOW84W8o2mnQ+Co5HzBqcSfbMZ0Sk8biFl5duxqMUjy92HUhhnw1EYqrrOd6KxdP/ACaOIWl1Go7SxUacHUC51eIbBOahxZS3SyikyNk403VrVBvkZTp7vEVR5OKxT8JGg8eUfqxjxyufv0quTBq3/qcwuVkJKrnx0KcfTpUYbKexZLwdkNpct7FvOfcrVOyRtDSanwaZhMjaHikRhvh8r9TtU7GX9vVQ43NEjYcEupt44w3/AMif3qVXI3jXrZfbN/3Zm8sL632e2kZe/CiVD8s1HtteDeu71LTy3Kx/3ycNmrzSaY7Ia+uDlV9+liBUKvL6PYh+JfVXD28/4O++4DfqAZFCr3BWUKPhGPvV3W0cF+p9Sn9UrGv5N3D+X52BLNpHiHH11kUVbMIx1klmVsv7nxecOCOEW8yx7tLtj4pmjhz2ZTrtzj3Wza3BJwQDdxjPQFijHyw4H3psfyUels8zOiPl+WP25p0HimGHw0vVlF+WWWlcfumzuiypwnFJF/8AcYIfkwNSuPJtGMo9Wv8Ak6V47JGd+IowHXUImz8VOfpVlLHk0Woce7Mkg/PtuP8AMUkdSA+PtU+6jf8A1CHlnzJ6RrVfzP5qMD/dinvRKv1SteGfP/mZafkk+S/3p7yH+qV/DOqz9IVlIyoGcMxCgFD1JwNxUqxM1r9Qqm8FsFaHcZoBQCgFAKAUAoBQHj/pltmNzCVGf0TE48Fb/vWczy9dFuaPOckeVZnnNHZDdSKurOVzpwfdmquCM56aMluNqXsec4KN4g1GJIrH3a/teUboeMyRnKvqHg2anL8nTDUT8ljsedZwoHZxY6DUqlR5Ej+taJnUrLJLg6pLuOfeWC2AxgsjhGHxWjTYl7rXSOVbWNDmHisUX7Mjhh/MuD86qov5KxhNPlpGiXmW6iOkX8TjxjlJ+YYVb+S8t/8A2Oy05xlONV8g7vWJpj9yNlj/AFnYOZbc57W8H8Gs/Y4qrj/7Gbpfmw13HGuHt1vZGHgYNX3qNsfkh0V+Zkfd3fCjs63B78ooXPng0xAKuhfqZHTycMAJiS6+JA+1TmJbdp4+WckfE9B/Qvcx+GJT9d6hyXgh31rps7bHnXiEZGuUSqDuJFVsj94jNQpsha1xfeSZvfSAZFwbGIHptI64+KgVZ2/sWl6hnwQn/wDSzKSYl7MnwluDj5viq72YfnH4Opud70qFZ4zjvMSlvman3GPz9hyNzPdn/O0/uqq/YVXcyj1cznk41cnrcSY8CxI+tNzM/fsfk6uDXE888UPbOAzDJDEYUbscjyBpFtvJtpnZbYopny9wr3K6tTxdqMB2ZvU1YxknPSsHY93Z+mP8NaT8s5SjmWDn43CYbiaLJwjsBuenUfQ1tLs/LtRFwscTgJqDAA0AzQgUJFASvKkWq8tx/qqfkc/0q0PuRvplm2K/c/QYrrPqBQCgFAKAUAoBQCgPNvSjF/xFo2QNpQc7DbBxVJnDqeJxZ5XxSPTK24OdxjwrI8y2OJGB/g/x5+mKHZGvOjcvhnNUnnmDUYyQfcMYJxVWsBycVwbvwq+FVyzL3pH12K4xig9yRtt7MMcbDqSfADcmkY7ng0pjKye1PBZuXOUfxMbTujBe7LKurzwFJ+tdCpS7PTj6evMmWKLkWFVGoDfHTWT8ctj6VPtRNVoql2dU3I9sIywwT4BVzU+3Et+Uo+Cq818BSARyRkFHUggADRIu++D3jx8KrKtY4MdRo61W3FFWBzXMeHgzQCgFCUn4MshHUEe8EUIw0YoQTPBeBrPFJM84jjjYK2EaRtxnOkHZfOrJeWen6f6bPWS2wfJ1JZcLX2rq5k/cjVR9c1XfBH0cPwde++DenErCBXa1huO2ZGRXkZSF17E4B64qrvhjCR7Gg/CktPdGyTWEVsVzdPJ9o1xgsU3Neo6jY2rPgAuyszMQMZO/lXQ9Q/g+bl+F9NOblJv/AAdFjxmRw0rxW0MEftuIFyT3Imernwq8Jyn/AEPO9R9O9O0FbclmXhFY4leieV5RGI1dshB0Ud3TvqW8n5zfJSsbjwc1QYCgFAWP0dxauIQ+Wpvkpq9f3HZoY5uR7oK6j6QzQCgFAKAUAoBQCgPN/TKAqWrkZAkcH+JR/aqTOHWvG1s8pu5wXDL0GMeYHjWR5rkt6fg7JrlJH0yBY1IPrIvUthlYqPkceNZ7vq5Puf8ATYajQYp4zyR91AUYrkHvBXcEHoRWp8NfRKmbrn2jVioM8Gy29r4H+lVkUn9p1gZ6VQwSy8I6rXh0sm6Jke8VfZI3jpLZdI6rrhk1svaSBVBIXffY9R9K0ri48s79JppVS3TLLw7mCJUQNctjUwKpsoGBjZRWjnH5Ouepqh3IsFrzXZhD6kr7ny+5rJ3RTwY/n6ms8nBZc424DYtWOx6laO6PwZL1GtvCiUnjHMEbqqiEr+m1dR4YqytRdaxTTWDi4DaCeeOEtpDuFLHuB6/SsYrLPNjBTsSfCZdk4RZTC8hjgKG2UlZtZbWRn2u7fFabU8pHaqapqcUuvJo9HXCIXbXcIHMgcRIwyMIMu5B+AFRXH5K6KmL5nz8EBa5SN3VmBMhXCe0QOgz3Lvv8Krg5YrGWvkjblnJ9fVnGRqznHx7qqzGWfJqqChssOIzW0nawtv0ZTurr3qy94qcnXptRKmWYvBYJLCK8jNxZDSy7zW2ctH4tH+ZKpZTnmJ+k+jfiFWpV3vn5IGub9j61NPlCoLEhwnhokDSyv2cEe8j/AGRB3ufCta693LPJ9V9Ur0VeX9xxcX4mbhlVV7OCPaKPw/bbxc95rpbS4R+T+o+oWamxykzlqp5WTNCBQChJcvRRFm+z+WJz8yB/Wtalyeh6as25/Y9mFdB74oBQCgFAKAUAoAaA8/8ATPHmyjbwmX6q1VmcOuX+3k8YrI8g6VTV2QPflc+Qbb7msLF9R9/+H73+Rk3+nJpnl1uxHQnA9w2H0rdfB8VqrHdfKT8s2Mp0dOh7v61XybTjX+UWV9SZ8W/tfA1EjzbPtJOycA7g7+qMdQW2zv5Z+dWpWWb+nxzaej8BuljhjiWOKNd2yxGo4Pfiuhywz2XYlw8EV6WriN7SMiVHbtFJCnpsaynLPkwvnGSxF5KVwuFQiNJkgsdKL7bbDf8AZXzNZYXbPMdSf1T6LXw+40qdMMEfX28yN8c7fSqOST4RWMoxTUIo02lyx1Bkt5BuMBDG3wIxUyee0FZFvmKKfxONcBlBA7Qgq3tKff3jwNWwvBpsSy49YPuyhZ2CICzMQFA6knpVe3wcuHJ4RfvwMkURsLdSCwL3U5B0jSMlFbvAA+JrXDSwjvUJRj7UV/VknytdWT3a9g8xMduyKpUKgUAajk76iTn41MXF9G2nnU5/T4RX+CANJItujaSZCoZwpAGnOSAcnPSqr9jlqw5PavJDcz3TPOQygGMaNiSOpbOT76rI5tTJuWGRVUOYwRQlM38GWVbmEwMUkLqoI8yAc+Ix3VaLeTr0tkt6SJXmq4WS7mZAAuvTsMA6di2B4kGuW15kftHpkJQ0sFJ5eCJqh3sloV7SwuI/+XLFMPj6jf0rpoeYNHw/4xp+iNiIMCrZPzVszQgUAoBQHoPodizPO/hGo/mY/wBq2qPV9LX1SZ6sK3PbM0AoBQCgFAKAUAoClel2PPDmP5ZIz/ux/Wqy6OTWrNR4YDWJ4zRI20SmNWJwcsEHiQdR+g+oqsll5PrPRtVCvTe0/wBTaOInS/ubPyOauj5ia22v+pMSWKThngbDHcxN45zny7/KrHc4KxcESiFZNJGCMgjwI61nI8y+O3KHEXIUYJHrDpVYvBGlk1J4JHhsQIQyMwB1aQBqdt+4dw8zVsfJM63LLm8I7eagn4RdMRXDLks4Zv5QMCqR27sGtKiuIr+TTwSHK6m9UavWb+EYXyA2z760aLSjubbXBeOGWLzKDDbeoC41MQgYNjx3OMdaq4t9F663NfRE+JIpItXb2y6TndGDL8fAZxk+VWlnCREoyh98TzvjFuVxvn1xv4g/2NRjBTGEzq5ZmkS5iMTBXLhVJGoAsdOcd/Wqx7OeuTVi29lx4lf37i7VrwlYUBIVEUPqzlTgZGwPfWjcjrnO6W5buiP4ZwRPxQg1yLiEuzBtOtiqthSP1d8VVLDMa6o78fsRVvJKqZg1KdbhtO7AZBAPxA+VVMk5JfSR1zK7uWckt0JPXbbeobMJtvs11BUUIJnlUaZXnPSCJ5P4iNCD5t9KlPCbPa9C0zv1kYnzwvhwkDTzv2cCbyOerE/qIP1nNYV173ln6j6n6pVoKsJ/V4R2w8Xs7z9A8QtCvqwSdVI7lm8yf1vOuiUIzWFwfH+n/iSyFzc3lNmbCwkie5tpFwz28mO8MVGtWU942rKuLhLDPe9enXrPTnZW84Kypq5+TsUBmhAoBQHqHobh/R3D+LqvyXP9a3qXB7fpa+ls9IFbHqigFAKAUAoBQCgFAVP0owF+GzgDJwpAHU4cGqy6MNQswZ+foNxjvHj1FYnjzymbkmYFcn2TlR3Zzk4+VC0LHBxkvDNlywLsV6E5FCl0lKbaOu20lMg6XUE5zg/96sjSqaSORXLPqJySSScY6+QqsjntluyxxL2PiKpHsppfvwTfBIRhXfpkjbJLkY9UeQ6YFXwdMo7m3Lomec+HMLNWMIjVnhUDUNROSM6R0yDVduHk6IVSS3bcI5eWoRI0MR9kuZSPkAPPc1ouWRGKlJQ/kuvO9zcQRLHAilZGwCNRlynrn1emnaouclxFH1fpVFE5PfxhfwSfCS01mZJnRmdNWEXSFB7sdSfHPfV1lx5PP9RhWnKMUeM8VmGnRg5VyMnocMMY+ArI+e3LDR8cPnMbq6+0jBh37g5G1UOJy2vKO2Pikqh1VyqyEs4GPWJBBz5bnamR7s8PBqa8kOMyN6q6Rudl/KD4UyVdkn5NJNQUyKAUIFCSy8HgjWxkklkCRvMocgjWViGRGq9SWY/DFWUcxPp/QtVDRxlfLvwQPFuJtcso0iOFNooh0QeJ/M57zUPrCPL1+vs1NjnJnHJCCMUyefGbTJrgnNEtuOzlQToobstRw0RII2bqV33U1bcepR6lZXW4eGRCdKqeTLs+qggUByySvnYbVJ0RhHHJr7dh1ZRTBb24vwe0+hxf+CZ8g6pW6eQAroqXB6+hjtr4L7Wh3CgFAKAUAoBQCgFAQfOo/wCCnx3Jn5EGoZSz7Twjm2Ne1RlTDuZA2OjESEKceOMVkzzdRFcEUR1BGCNiO8EVDOHmLMA469PH+9QS1u6PqpKH1F7QqsiJfazbfDK/xL96rErpv+Qt3ISLJPEvUJk+4tuT9PrW0ez0qcSsx8Hd6VoLgIGDFoIyjr6gUI7HAUfmO1Ukpbz3bnV+UwuJN4KlyzxF7WZM27F2ZQoJwBqOAWIzjcHapXDPGjV7c9yL1bc2Xz6nWwA0uyK58S2k4z1BI61LlJk26q+PEV2cVtxDirxSsJI49LdFVTGUcZDBhncttjFPqaLzdrjnJReJcKmjy8syse2ClVzkMcE58PdUbSlkMVtmIayPFmb6gyFCRQgUAoBQGoxZNTlmvuNLBsoUBYVBGGfBkFCyTPg3HhU4L+2fDTmhZQRpeU+NTguoo0uang0RK8qvEs+qXSQoyASBk9+M7ZxVlg3qxnk909HwX8GrJjDs7ZAwDlsZA+FbR6PUpxtyiy1Y2FAKAUAoBQCgFAKAieaU1WdwP9J//qahlZ/azyrikaTrqdBrXTFG35WOHD/YVTHBzSipFM43G6zyF1wWZjt0Pfse/rVWjzbk9zycatVTDDQ6e77ULcS/qbIj6y++ofRSSaizbxAfoz8PuKrHsppv+VEzwWxuYJYwk4VXIGfZckjOF2bYHFa45PZ9rEso6uaLa4FgHlvHlyVyrKQMkK4wMnOzfSiXOcmG2Xup7uPgxYcc7UhbeCV2EiMdIVAwB9ltR26DfHf3VLZ2TsWeC4cGs74htMEcXrEgvJrYZkMvQADqSKn6jKcbZPhHxw7l26zKTdoikl2EaEnoVwSxORv9B4UwzRxntyeacV7Yk6pWZRKT0ABIONRx35qjZyTuzFo0pcKOprLB5rrkwbon2VNMEqlLtnwS56nH0qSyUUboZAo3NQZzjl8H0bgUwV9pmFmJOAMk7AdSaYJVRmUupIYFSOoIII+Bpglwx2fOo0IwjIoVBNCUb+Fyqs0bNGJFDrlD0YE4wfnUrs1qeJrJ6X6S+CKy2kFrAivI7EBQq5ATvPhW1i6SPV1daajGK5ZReL8nXVu0SOEMkzaVjRtTe87YA86z2NM456ecGk+2Wax9HFsxNu99/wAYE1lEA0p5HO56ir7EdMdJH7d3JjkPk20lW4F2jmW3kZG9YhAAMgjHXpmpjFFqKINPd2jt43BYScEkmt7YIoJCFlGssr6dWrqc4+tHjblGslB1ZSLtyFDo4fbL/pKfnv8A1q8ejooWK0T9WNRQCgFAKAUAoBQCgOXiiaoZF8Ucf7TQiXR4hwjmAzQP2cam50n9GRkMVCqHUeOFPxrPJxqzKwuzq4jCJbeaMrlwwdD3qdERIHkcmngpZHdFryV2/wCB9jHcLJ/iRGJgyn1WR9vv9qjHBzOnankgDISMd9UMVFZN1sQSD31DK25wdV+Mxtj/APbiqx7OfTPFiZM8owSXEqpNNIBkEBCExgHwHlW0eWevCxzltLRzbwG2i4ZI6AlgyesXZjjVg7nptUzhjk1sojFZ8lZ5O9SdDggZxknqVI6eFUj2c1WVamz2Lh5fL4AOTkEDrtXQeok/BwfiOzSZ5GI2YAHw76rNpIyumoReTxXim2T3lsnfI3OendXOeTFLk4rCGaQkQxM5/YQtj5VCTY9tyJO85cvo4mnlt5EjXqzYGM7eznP0q2xk/l2lnaWnhvooupFVnniQEA7anODv3YFSq2bx0cmstlT5h4clvO0McwmC4BcDA1frD4Gqvg5bYqMsIjwaqZFr9G9zFFeq8qMwCsAVRn0sehIAJ8d6tX2dGlaVmWdnOqyXvEQkUDKzKqoHGguBn1yD0HX5VM+WTqE7bcRWDqs/Rfd6l7aSKNSfWIbUR7thkmiqfkstBPy8HPzvycLHsjHIziQlcEDOodMY7jUThjoz1Wl9rGHnJMzWtvweCJ5IFnuZdzq9lANyF+dX4gb7YaeKystm3nvgkGqzuYkWNpZYgyDbUGIOdPiKmSXDL6iqGYyXGS78U4Es9zBOx2gDFV8XOME+QAq7Xk7pVKUk/go3I8ck/F7qW53khDKB3LltI0jw0j61SGXJtnHp8yuk59mi9u4LC+mmjc3V9M7qka+xFrPsse9tgMeVOEw2q7G1zI7+SZJvwXEZplPbM8uoY31LHggAeHSpj0zSjOyTfZw3Nk55bjVAPZEjZIAChix69/lUJfRgNf7HB6XwOHRbwp+WKMfJRWiXB1w4ijvqSwoBQCgFAKAUAoBQGGGRQHhHpA5Uk4bcfi7UkQsxII/yWbqp/ZOTis5I4L4OD3I7OE3yTxtIux0kOp6hljAyPEHSKLkmuSksnRecLV9ULsGMgOdBywQz6kPvAc/KpwS4ZW1s844rYtFI67squyB8HSxXwPjWbRxOG14NFrJ6w8fv76hrgpYvpZKXh9RvdWa7OKn70SfLVz2RSVVyQ3rAdSNiD5/962jwelF7ZbkW/nDjME3DJgmoOSpxpcAHVnqRirSmmsHRLUQnHjspHCZgUA1aDqEit35x9Tk4xVMnM+3F8Ho3AuM3YjfaFtC6skMCR7gcUcpIvG+6KxwRP/iDSuWnk7Q41LGgAXcdQB3gnOT4VWUuOTnss3PM3n9ig8TOfW7i7DyzjoPID70LxXktnoY4vJHdm2GOzlDM22+pBsQatXw8HVppvdtLH6cLhwltGpbS7SFlH62kLjI78ZNXsL6xvCSLL6OQw4ZFr1Z0v7WcgZOOtTHo2pTVXJ5nyFyj+OmkklJEEbHVjYuSSdIPcPGs4Ry8s4Kafck2+i58s8csLq4exjsI1jCtpbSp1hNjkY2+dXTTeDpqsrnJw2mnlew/BcYltYiOyeLtMdSuNwue7GT9KhLEsFKo+3e4roiue3P/AIzCASCDAMjzfJ+9Vl95lqX/AOQv4LD6VJ2DWcasQHmyQDjOCoGfmavZ4N9bJral8m70gMv4jh6t07bJ+GB9zUT8DVY3QT+TZ6Q7uGAwytaG4lGoR5BManY+sB1PhUzx8FtXKMcPbllWh4ReT3VncXT5kklDCHG8cSb6tPRR0+YquG2snNGqyU4yl/YtfNPE5LW/tJWkAt3DQsurozb6iPDYb1eTwzruscLE2+CA4/zFbWXERdwSrN2qmOeNCDjGMOD+by99VbSlkxstjXZui857I7jHPFgjPNZWeLmTOZXUDST1YDJ9b3YqHJeCs9RX90FyQsHpEu4oFhiSJAAQz6SzOzbsxycajmoU3jBmtTJRwivQX1xKsVsbhzG0oUR6jgFmG+PDLUTZWMpNpH6ciXAA8ABW57C6PuhIoBQCgFAKAUAoBQCgOa/s0mjaKRQyOCrA94NGRJKSwzwTmTgU/CboFDmM5MbHdWBBBRx4gGsmsM8m2DpllE7y2YhJ+KWTU0sfroMZjIKKc+HrGpR0UtPMl5I68t826WbYxpml1Y3DxTYJ/lJoyXH6dpUOKcHltZgkinGfVfHquPFT8RVWjmurcU0zbcyZVh5GskedXHE0z64WXCgqGIyASoyR5MvU++rndKLbbgWHiF9K9hMhVtPU/onAyMdWPTp9aq00zOEpp7ZFc4ccpsyg5XKPsCfFW7qv2ay2zfeGW7gsEhDbRgedwMfLOfH51nKJzOqSecr+5zWOhWcPIGG/qRZAb96Q93u3pwirdUPOWVW/lLHoANRAA6KPAVLkbRk59lk9EH/qUf7kn2q0Ozq03/Ieq89c1xWHZGS37Vn16fZ9XTjO56dRW0pYOy+1QxlEly/xc3VktwU0a0c6Qc4xkdfhTOUXhLdDJB+imNTw796SXV4+0R9qiHRlpUvbKc3HoLR2t+E27PO7FDM41OSTuEHv9wqjl8HK7FCTjUuSU5D4PPDxSTt37RxDqdgS2GkIwrH823SphF7i2mrlG57vg3cw8Cml41E+AEISQMSPZhxq+OSPnSUW5C2pyvT8HT6T7iDNvN26F4ZVJiDKWZSQScA7YxUzxwTrZQ+l56Inn7m20uo1WFS8gwQ5BXshkE4/a2qk5p9GGr1Nc4pR7Oe39KFysQRoY3cDAc5+ZXvPxqPdwVj6hLbhoq9zzBdtKbgzsHcFNSnGB10gDoKq5Ps5ndNy3ZI2eeWU+szyN5lmPyqMtkZlN/JLcP5NvpgNFo439p/UGPc2/wBKvsbXRtHT2S8Fj4f6JblgO2njjHXCgufntVlW/J1R0Mn9zLNw30UWSY7VpZj4FtK/Jd/rV1BHTHRwXfJaOHctWcGOytY1I7woz8zvVlFG8aoR6RLCpNDNAKAUAoBQCgFAKAUAoBQEVzHwOK8gaGUbHdT3o3cwqGsmdtanHDPBLqKfhlxJE65JUqc9JEPssp94B+FU6Z5cd1EsMsHGuOlbXVBGkokLoWwS0faIGIGP4vlTJ1uzEVjk+edZTLatqA/QvbFT34kQZ3+NJcoX8wZRXfr8awweXGPJ98OicgFVYnI3AP3q2JGk4Tbe1FruOG3ZsZ3cP2agk6mPl+rmquEiKqb1LMuirWFrIyjSjHp3Vfa2TOqTlwi7cs8rXMmrCKo/aIFVdMmZrQ3SfRIcD5MLSP2swUDOyj+rf2rRU/JtD0zLzKRV+I8Mhj9kFiHcb79FPwq+xJHWtPXBcHV6G4yeIqQCQsbknGwzgDJrOvllNMv9wufpl4PNOtvJGmpULK24GDIUC9e7NXmjbVwcksFl4BFHY2MVvczxoyoQ2XAA1ZJxn31ZYSwbQ2wglJnnPL/NycLnmgRjc2pbKsCAwOBkr3Ed3wrNS2nBC9VSaXKJHinpHtl1PZ2YWZusjqoxnvwu5NHYi09ZDuEeSp8O5tvYhL2c2DK3aO2AWJwFzk9BjFU3s5VqbFnD7OG74rPO4aWd2PTJY7A9Rt3VVtsxlZKT5Zrs7GSU4iidz+ypb6gVGGV2SfSyWWz5CvpTkQdmu3tsB9OtXVbZtHRWz8YLHY+iljjt7rAHdGv/AFN/arqo6oemv9TLJYejqwjxmJpD/qMT9BtV1BI646KqPjJYrPhcMIxFCifuqB9askjojXGPSOvFSXM0AoBQCgFAKAUAoBQCgFAKAUAoBQGKArHPfKaX8OBhZkyY28/yn9k1DWTC+lWI8P4bxWbh7zRNGMsCjo36rDbUPMZ+NZ5wcFc3W9pZeZox+FuCp1KUs2VvzAern/bVn0dM+YPBRrM/pF94rKL5OGv7kWngtyFjAZ1G4/rXXg9YtFxx2D8HPD25aR1YKoGx27zjyqvkFa4JIeyGSo9mpCyXfgfGLeIN2t0BsNlO528s1GBj9yNtuabaF5H0ls5wXIUeXtf2qMpFfpRROL8dDqdLgtrJAVSVAbYksfI1nKxYwjKy6OMI+uWOb7mwieOARjtGDFmXJGBjA8qzTwckbnBcGeI80312CstyxX2iowq+rv0FG2yk7py7ZDSSFjlmLHxJJP1qDFtslrXgFxMR+HtpmGBuVIGe/c7YqVEsqpy6RZOHei++k9vs4h+02o/yr/ep9ts2jorH2Wnh3olhXea4d/EKAg+e5qyrwdEdBHyyy8P5HsIelsrEd7+ufrV9iOiOlqj4J+GBUGFUKPAAAfSrG6il0bKEigFAKAUBmgFAKAUAoBQCgFAKAUAoBQCgMUAoBQA0B556U+ShdIbmBf06DcD/ADVHd+8O6qyicuoq3LKPIeGcZ7OOaCUM8bx6Av5HU6lO/dknaqZOWM8JpkUc1mYpmwXMmnRrOnOcbdff1qdzNfekaQzA5BOR5mo3PIVrzk3rfSadGF65DY9YDw91W91mv5ngxIZMAmQ756HHTbeocmzJ3yFnCGcZRnHeFyWPuqqyym6Uid4fyZfzn9HaSYPewCD5tirKLJVM5eC3cO9EV04Xt544wM7KC7b9d9h96uq35No6OT7ZZ+HeiWyTeR5JT5nSPktW2I2jo4LvktPDOWLO3/wrWNT46QW/mO9WSRvGqEekSwWpNDOKAUAoBQCgFAKAUAoBQCgFAKAzQCgFAKAUAoBQCgFAKAUAoBQGMUB416XOR9Ba+t19U7zIP1T/AMwDw8fnVJI476f1I8wzWLPPfZ1R2TSNiGOR/DSpY/QUwSouXSLNwb0e8Tk3FuIwQRmVlGzbH1dzmrKDNo6axlm4d6G26z3QHlGufq1W9v5Nlo/llp4b6L+HRYLRtKf9RiR/KMCrKCN46aCLTZcKghGIoY0A/KqirJGygl0jsqSwoDNAKAUAoBQCgFAKAxQGaAUBigM0AoBQCgFAKAUAoBQCgFAKAUAoBQCgMUAoD5liDAqwBBGCD0IPcaENZK5Y8h8OiOpbRCc59bLYz4A9KrtRmqYJ5wWC3tkQYRFUeCgD7VODRJLo21JIoBQCgFAKAzQGKAUAoBQCgFAZoDFAKAUAoBQCgFAKAzQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgP/2Q=="
export const sendData = (nameProduct, desProduct, imgUpload) => {
    return {
        "id": null,
        "href": "data:image/jpeg;base64,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",
        "cancellationDate": null,
        "cancellationReason": null,
        "category": nameProduct,
        "completionDate": null,
        "description": desProduct,
        "expectedCompletionDate": null,
        "externalId": null,
        "notificationContact": null,
        "orderDate": null,
        "priority": null,
        "requestedCompletionDate": null,
        "requestedStartDate": null,
        "agreement": null,
        "billingAccount": null,
        "channel": null,
        "note": [
            {
                "id": "333333333333333",
                "author": null,
                "date": null,
                "text": "http://www.tesst.com",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "Note"
            }
        ],
        "orderTotalPrice": null,
        "payment": null,
        "productOfferingQualification": null,
        "quote": [
            {
                "validFor": null,
                "state": 'acknowledged',
                "note": null,
                "lastStateChangedDate": null,
                "id": null,
                "href": null,
                "name": "BIA KEN 007",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "QuoteRef",
                "@referredType": null
            }
        ],
        "state": "acknowledged",
        "@baseType": null,
        "@schemaLocation": null,
        "@type": "BeerOrder"
    }

}

export const createProduct = (idProduct, quantity, desProduct, nameProduct, priceProduct) => {
    return {
        "id": null,
        "href": null,
        "cancellationDate": null,
        "cancellationReason": null,
        "category": "BIA",
        "completionDate": null,
        "description": null,
        "expectedCompletionDate": null,
        "externalId": null,
        "notificationContact": null,
        "orderDate": null,
        "priority": null,
        "requestedCompletionDate": null,
        "requestedStartDate": null,
        "agreement": null,
        "billingAccount": null,
        "channel": null,
        "note": [
            {
                "id": "333333333333333",
                "author": null,
                "date": null,
                "text": "http://www.tesst.com",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "Note"
            }
        ],
        "orderTotalPrice": null,
        "payment": null,
        "productOfferingQualification": null,
        "productOrderItem": [
            {
                "id": idProduct,
                "quantity": quantity,
                "action": "noChange",
                "appointment": null,
                "billingAccount": null,
                "name": nameProduct,
                "itemTerm": null,
                "itemTotalPrice": null,
                "payment": null,
                "product": {
                    "id": idProduct,
                    "href": null,
                    "description": desProduct,
                    "isBundle": null,
                    "isCustomerVisible": null,
                    "name": "BIA NH???T",
                    "orderDate": null,
                    "productSerialNumber": null,
                    "startDate": null,
                    "terminationDate": null,
                    "agreement": null,
                    "billingAccount": null,
                    "place": null,
                    "product": null,
                    "productCharacteristic": null,
                    "productOffering": null,
                    "productOrderItem": null,
                    "productPrice": [
                        {
                            "description": null,
                            "name": "Gi?? ????? xu???t",
                            "priceType": null,
                            "recurringChargePeriod": null,
                            "unitOfMeasure": null,
                            "billingAccount": null,
                            "price": {
                                "percentage": null,
                                "taxRate": null,
                                "dutyFreeAmount": {
                                    "unit": "VND",
                                    "value": 350000.0
                                },
                                "taxIncludedAmount": {
                                    "unit": "VBD",
                                    "value": priceProduct
                                },
                                "@baseType": null,
                                "@schemaLocation": null,
                                "@type": "Price"
                            },
                            "productOfferingPrice": null,
                            "productPriceAlteration": null,
                            "@baseType": null,
                            "@schemaLocation": null,
                            "@type": "ProductPrice"
                        }
                    ],
                    "productRelationship": null,
                    "productSpecification": null,
                    "productTerm": null,
                    "realizingResource": null,
                    "realizingService": null,
                    "relatedParty": null,
                    "status": "created",
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "OrderPrice",
                    "@referredType": null
                },
                "productOffering": {
                    "id": idProduct,
                    "href": null,
                    "name": nameProduct,
                    "@baseType": null,
                    "@schemaLocation": null,
                    "@type": "ProductOfferingRef",
                    "@referredType": null
                },
                "productOfferingQualificationItem": null,
                "productOrderItem": null,
                "productOrderItemRelationship": null,
                "qualification": null,
                "quoteItem": null,
                "state": "acknowledged",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "ProductOrderItem"
            }
        ],
        "quote": [
            {
                "id": idProduct,
                "href": "bia ken 001010",
                "name": nameProduct,
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "QuoteRef",
                "@referredType": null
            }
        ],
        "relatedParty": null,
        "state": "acknowledged",
        "@baseType": null,
        "@schemaLocation": null,
        "@type": "BeerOrder"
    }
}



export const orderListProductItem = (listProductItem) => {
    return {

        "id": null,
        "href": null,
        "cancellationDate": null,
        "cancellationReason": null,
        "category": "BIA",
        "completionDate": null,
        "description": null,
        "expectedCompletionDate": null,
        "externalId": null,
        "notificationContact": null,
        "orderDate": null,
        "priority": null,
        "requestedCompletionDate": null,
        "requestedStartDate": null,
        "agreement": null,
        "billingAccount": null,
        "channel": null,
        "note": [
            {
                "id": "333333333333333",
                "author": null,
                "date": null,
                "text": "http://www.tesst.com",
                "@baseType": null,
                "@schemaLocation": null,
                "@type": "Note"
            }
        ],
        "orderTotalPrice": null,
        "payment": null,
        "productOfferingQualification": null,
        "productOrderItem": listProductItem,
        "quote": null,
        "relatedParty": null,
        "state": "inProgress",
        "@baseType": null,
        "@schemaLocation": null,
        "@type": "BeerOrder"
    }
}

// var tamLogic = Number.parseInt(logic).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//C:/Program Files (x86)/Google/Chrome/Application --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
//"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp


// {
//     "id": null,
//     "href": null,
//     "cancellationDate": null,
//     "cancellationReason": null,
//     "category": null,
//     "completionDate": null,
//     "description": null,
//     "expectedCompletionDate": null,
//     "externalId": null,
//     "notificationContact": null,
//     "orderDate": null,
//     "priority": null,
//     "requestedCompletionDate": null,
//     "requestedStartDate": null,
//     "agreement": null,
//     "billingAccount": null,
//     "channel": null,
//     "note": [
//         {
//             "id": "333333333333333",
//             "author": null,
//             "date": null,
//             "text": "http://www.tesst.com",
//             "@baseType": null,
//             "@schemaLocation": null,
//             "@type": "Note"
//         }
//     ],
//     "orderTotalPrice": null,
//     "payment": null,
//     "productOfferingQualification": null,
//     "productOrderItem": [
//         {
//             "id": "98778989",
//             "quantity": 700,
//             "action": "noChange",
//             "appointment": null,
//             "billingAccount": null,
//             "itemPrice": [
//                 {
//                     "description": "Bia Heineken Lager, ho???c ????n gi???n l?? Heineken l?? m???t lo???i bia lager nh???t v???i 5% c???n theo th??? t??ch ???????c c??ng ty s???n xu???t bia H?? Lan Heineken N.V. s???n xu???t. Heineken n???i ti???ng v???i chai m??u xanh l?? c??y ?????c tr??ng v?? ng??i sao ?????. Wikipedia\n",
//                     "name": "bia bia bia bia bia bia bia",
//                     "priceType": "one time",
//                     "recurringChargePeriod": null,
//                     "unitOfMeasure": null,
//                     "billingAccount": null,
//                     "price": {
//                         "percentage": 0.0,
//                         "taxRate": 19.0,
//                         "dutyFreeAmount": {
//                             "unit": "VND",
//                             "value": 1.0E7
//                         },
//                         "taxIncludedAmount": {
//                             "unit": "VBD",
//                             "value": 1.0E7
//                         },
//                         "@baseType": null,
//                         "@schemaLocation": null,
//                         "@type": "Price"
//                     },
//                     "priceAlteration": [],
//                     "productOfferingPrice": null,
//                     "@baseType": null,
//                     "@schemaLocation": null,
//                     "@type": "OrderPrice"
//                 }
//             ],
//             "itemTerm": null,
//             "itemTotalPrice": null,
//             "payment": null,
//             "product": {
//                 "id": 1,
//                 "href": null,
//                 "description": "???????c d???ch t??? ti???ng Anh-Budweiser l?? m???t lo???i bia nh???t ki???u M??? ???????c s???n xu???t b???i Anheuser-Busch, m???t b??? ph???c???a AB InBev. ???????c gi???i thi???u v??o n??m 1876 b???i Carl Conrad & Co. of St. Louis, Missouri, Budweiser ???? tr??? th??nh m???t trong nh???ng lo???i bia b??n ch???y nh???t t???i Hoa K???. Wikipedia (ti???ng Anh)",
//                 "isBundle": null,
//                 "isCustomerVisible": null,
//                 "name": "BIA NH???T",
//                 "orderDate": null,
//                 "productSerialNumber": null,
//                 "startDate": null,
//                 "terminationDate": null,
//                 "agreement": null,
//                 "billingAccount": null,
//                 "place": null,
//                 "product": null,
//                 "productCharacteristic": null,
//                 "productOffering": null,
//                 "productOrderItem": null,
//                "productPrice":[
//                   {
//                     "name":"Gi?? ????? xu???t",
//                     "price": {
//                         "dutyFreeAmount": {
//                             "unit": "VND",
//                             "value": 350000
//                         },
//                         "taxIncludedAmount": {
//                             "unit": "VBD",
//                             "value": 450000
//                         },
//                         "@baseType": null,
//                         "@schemaLocation": null,
//                         "priceType":"one time"
//                     }
//                 }
//                ],
//                 "productRelationship": null,
//                 "productSpecification": null,
//                 "productTerm": null,
//                 "realizingResource": null,
//                 "realizingService": null,
//                 "relatedParty": null,
//                 "status": "created",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "OrderPrice",
//                 "@referredType": null
//             },
//             "productOffering": {
//                 "id": 1,
//                 "href": null,
//                 "name": "bia ken 1111",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "ProductOfferingRef",
//                 "@referredType": null
//             },
//             "productOfferingQualificationItem": null,
//             "productOrderItem": null,
//             "productOrderItemRelationship": null,
//             "qualification": null,
//             "quoteItem": null,
//             "state": "acknowledged",
//             "@baseType": null,
//             "@schemaLocation": null,
//             "@type": "ProductOrderItem"
//         }
//     ],
//     "quote": [
//         {
//             "id": 1,
//             "href": null,
//             "name": "bia ken 1111",
//             "@baseType": null,
//             "@schemaLocation": null,
//             "@type": "QuoteRef",
//             "@referredType": null
//         }
//     ],
//     "relatedParty": null,
//     "state": "acknowledged",
//     "@baseType": null,
//     "@schemaLocation": null,
//     "@type": "BeerOrder"
// }




// {
//     "id": "610cc2bb83358546c0e40a4e",
//         "href": null,
//         "cancellationDate": null,
//         "cancellationReason": null,
//         "category": "BIA",
//         "completionDate": null,
//         "description": null,
//         "expectedCompletionDate": null,
//         "externalId": null,
//         "notificationContact": null,
//         "orderDate": null,
//         "priority": null,
//         "requestedCompletionDate": null,
//         "requestedStartDate": null,
//         "agreement": null,
//         "billingAccount": null,
//         "channel": null,
//         "note": [
//             {
//                 "id": "333333333333333",
//                 "author": null,
//                 "date": null,
//                 "text": "http://www.tesst.com",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "Note"
//             }
//         ],
//         "orderTotalPrice": null,
//         "payment": null,
//         "productOfferingQualification": null,
//         "productOrderItem": [
//             {
//                 "id": 987654321,
//                 "quantity": 200,
//                 "action": "noChange",
//                 "appointment": null,
//                 "billingAccount": null,
//                 "itemTerm": null,
//                 "itemTotalPrice": null,
//                 "payment": null,
//                 "product": {
//                     "id": idProduct,
//                     "href": null,
//                     "description": null,
//                     "isBundle": null,
//                     "isCustomerVisible": null,
//                     "name": "BIA NH???T",
//                     "orderDate": null,
//                     "productSerialNumber": null,
//                     "startDate": null,
//                     "terminationDate": null,
//                     "agreement": null,
//                     "billingAccount": null,
//                     "place": null,
//                     "product": null,
//                     "productCharacteristic": null,
//                     "productOffering": null,
//                     "productOrderItem": null,
//                     "productPrice": [
//                         {
//                             "description": null,
//                             "name": "Gi?? ????? xu???t",
//                             "priceType": null,
//                             "recurringChargePeriod": null,
//                             "unitOfMeasure": null,
//                             "billingAccount": null,
                            // "price": {
                            //     "percentage": null,
                            //     "taxRate": null,
                            //     "dutyFreeAmount": {
                            //         "unit": "VND",
                            //         "value": 350000.0
                            //     },
                            //     "taxIncludedAmount": {
                            //         "unit": "VBD",
                            //         "value": 700000
                            //     },
                            //     "@baseType": null,
                            //     "@schemaLocation": null,
                            //     "@type": "Price"
                            // },
//                             "productOfferingPrice": null,
//                             "productPriceAlteration": null,
//                             "@baseType": null,
//                             "@schemaLocation": null,
//                             "@type": "ProductPrice"
//                         }
//                     ],
//                     "productRelationship": null,
//                     "productSpecification": null,
//                     "productTerm": null,
//                     "realizingResource": null,
//                     "realizingService": null,
//                     "relatedParty": null,
//                     "status": "created",
//                     "@baseType": null,
//                     "@schemaLocation": null,
//                     "@type": "OrderPrice",
//                     "@referredType": null
//                 },
//                 "productOffering": {
//                     "id": 987654321,
//                     "href": null,
//                     "name": "bia ken 001010",
//                     "@baseType": null,
//                     "@schemaLocation": null,
//                     "@type": "ProductOfferingRef",
//                     "@referredType": null
//                 },
//                 "productOfferingQualificationItem": null,
//                 "productOrderItem": null,
//                 "productOrderItemRelationship": null,
//                 "qualification": null,
//                 "quoteItem": null,
//                 "state": "acknowledged",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "ProductOrderItem"
//             }
//         ],
//         "quote": [
//             {
//                 "id": 987654321,
//                 "href": null,
//                 "name": "bia ken 001010",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "QuoteRef",
//                 "@referredType": null
//             }
//         ],
//         "relatedParty": null,
//         "state": "acknowledged",
//         "@baseType": null,
//         "@schemaLocation": null,
//         "@type": "BeerOrder"
// }



// {
//     "id": "610cc2bb83358546c0e40a4e",
//         "href": null,
//         "cancellationDate": null,
//         "cancellationReason": null,
//         "category": "BIA",
//         "completionDate": null,
//         "description": null,
//         "expectedCompletionDate": null,
//         "externalId": null,
//         "notificationContact": null,
//         "orderDate": null,
//         "priority": null,
//         "requestedCompletionDate": null,
//         "requestedStartDate": null,
//         "agreement": null,
//         "billingAccount": null,
//         "channel": null,
//         "note": [
//             {
//                 "id": "333333333333333",
//                 "author": null,
//                 "date": null,
//                 "text": "http://www.tesst.com",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "Note"
//             }
//         ],
//         "orderTotalPrice": null,
//         "payment": null,
//         "productOfferingQualification": null,
//         "productOrderItem": [
//             {
//                 "id": 987654321,
//                 "quantity": 200,
//                 "action": "noChange",
//                 "appointment": null,
//                 "billingAccount": null,
//                 "itemTerm": null,
//                 "itemTotalPrice": null,
//                 "payment": null,
//                 "product": {
//                     "id": 987654321,
//                     "href": null,
//                     "description": null,
//                     "isBundle": null,
//                     "isCustomerVisible": null,
//                     "name": "BIA NH???T",
//                     "orderDate": null,
//                     "productSerialNumber": null,
//                     "startDate": null,
//                     "terminationDate": null,
//                     "agreement": null,
//                     "billingAccount": null,
//                     "place": null,
//                     "product": null,
//                     "productCharacteristic": null,
//                     "productOffering": null,
//                     "productOrderItem": null,
//                     "productPrice": [
//                         {
//                             "description": null,
//                             "name": "Gi?? ????? xu???t",
//                             "priceType": null,
//                             "recurringChargePeriod": null,
//                             "unitOfMeasure": null,
//                             "billingAccount": null,
//                             "price": {
//                                 "percentage": null,
//                                 "taxRate": null,
//                                 "dutyFreeAmount": {
//                                     "unit": "VND",
//                                     "value": 350000.0
//                                 },
//                                 "taxIncludedAmount": {
//                                     "unit": "VBD",
//                                     "value": 700000
//                                 },
//                                 "@baseType": null,
//                                 "@schemaLocation": null,
//                                 "@type": "Price"
//                             },
//                             "productOfferingPrice": null,
//                             "productPriceAlteration": null,
//                             "@baseType": null,
//                             "@schemaLocation": null,
//                             "@type": "ProductPrice"
//                         }
//                     ],
//                     "productRelationship": null,
//                     "productSpecification": null,
//                     "productTerm": null,
//                     "realizingResource": null,
//                     "realizingService": null,
//                     "relatedParty": null,
//                     "status": "created",
//                     "@baseType": null,
//                     "@schemaLocation": null,
//                     "@type": "OrderPrice",
//                     "@referredType": null
//                 },
//                 "productOffering": {
//                     "id": 987654321,
//                     "href": null,
//                     "name": "bia ken 001010",
//                     "@baseType": null,
//                     "@schemaLocation": null,
//                     "@type": "ProductOfferingRef",
//                     "@referredType": null
//                 },
//                 "productOfferingQualificationItem": null,
//                 "productOrderItem": [
//                     {
//                         "id":987654321,
//                         "quantity":1,
//                         "name":"bia ken 001010",
//                         "itemPrice":[
//                       {
//                             "price": {
//                                 "percentage": 1,
//                                 "taxRate": null,
//                                 "dutyFreeAmount": {
//                                     "unit": "VND",
//                                     "value": 350000.0
//                                 },
//                                 "taxIncludedAmount": {
//                                     "unit": "VBD",
//                                     "value": 6000000
//                                 },
//                                 "@baseType": null,
//                                 "@schemaLocation": null,
//                                 "@type": "Price"
//                             }
//                       }
//                     ]
//                     },
                    //  {
                    //     "id":123321,
                    //     "quantity":5,
                    //     "name":"Bia heniken",
                    //     "itemPrice":[
                    //   {
                    //         "price": {
                    //             "percentage": null,
                    //             "taxRate": null,
                    //             "dutyFreeAmount": {
                    //                 "unit": "VND",
                    //                 "value": 350000.0
                    //             },
                    //             "taxIncludedAmount": {
                    //                 "unit": "VBD",
                    //                 "value": 700000
                    //             },
                    //             "@baseType": null,
                    //             "@schemaLocation": null,
                    //             "@type": "Price"
                    //         }
                    //   }
                    // ]
                    // }
//                 ],
//                 "productOrderItemRelationship": null,
//                 "qualification": null,
//                 "quoteItem": null,
//                 "state": "acknowledged",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "ProductOrderItem"
//             }
//         ],
//         "quote": [
//             {
//                 "id": 987654321,
//                 "href": null,
//                 "name": "bia ken 001010",
//                 "@baseType": null,
//                 "@schemaLocation": null,
//                 "@type": "QuoteRef",
//                 "@referredType": null
//             }
//         ],
//         "relatedParty": null,
//         "state": "acknowledged",
//         "@baseType": null,
//         "@schemaLocation": null,
//         "@type": "BeerOrder"
// }














// { 

// }

