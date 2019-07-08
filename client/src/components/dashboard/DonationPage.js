import React from 'react';
import BarChart from "./BarChart";
import { Link} from "react-router-dom";

const DonationPage = () => {

  return (
    <div className='row'>
      <div className="col-md-4 offset-1">
        <Link to="/dashboard" className="btn btn-light mb-3 float-left">Back To Dashboard</Link>
      </div>
      <div className="col-10 offset-1">
        <div className="card">
          <img style={{height: '450px'}} className="card-img-top" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhMVFhUVFxcXFxcXFxcXFxcdFxUXFxUVFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBFAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgEHAAj/xAA+EAABBAAEBAQDBQcDAwUAAAABAAIDEQQSITEFBkFRImFxgRMykaGxwdHwBxQjQlJy4TNi8RUWsjRDgpLC/8QAHAEAAgMBAQEBAAAAAAAAAAAAAwQBAgUABgcI/8QAMhEAAgIBBAEEAQIFAwUBAAAAAAECAxEEEiExBRMiQVFhFDIGI3GBoRVCkUNSsdHhM//aAAwDAQACEQMRAD8A9g0eNd14TMNdV7uJIa/YwGWQsOu3dYcoWUS2jEYxmffvzeq6Vs5r3HejJAOOcxw6Kle5MZpUosQzQ9k9GRqQn9lBhRNwTeRLFOS24gQO6nknJTLIESMSeAaTEeRRVA7gqzOds36qcJEboovjwbjua9FSVsV0Udhe3AsG6H6smDcmz51bALsv5IwRCkksAKplFGy6CA3qqSlwQx1hgk5gJjXD6JSYnNZDGlVhLDF2iwFPVzKEwU7XYVJgpmNhDR3Miq4jBIFGhbkjBMOTkL1FFcHfiBF/Vw/uRtPg9WWoydg7nRFqDsHcyMroy7IwZnmrk6LFAuFMl6PA0Pk4dfVbXjfLWaR7W8xM/VaGNvMeGeQcb4LLhpDHK2j0PR3m09V7zSa6rUw3QZhzhOuW2aFTmrQTKplbgrIumQIVi2T9MSNo2F+ctTQ6LN8Omeui8rBGaMOFFD1NatXu7Jg3F8CbGcPcNW7dljSWx4kaFV6fDFEpI3sIiwx6OH0CyOKKkg8Uihzj2REkFSRU+R39Kuor7LYRU57jplV0o/Z2EQEMrjQG6vHbnC5BylGKy2MMPyxOdXMKYWmvl+2DFJ66lfI5wvKUnUtb9v3I8fD6mf7sIUn5OC65Cjym/pI36FE/0G3/ALkD/wBTX/aA4jlXEdCw+9feFV+Fvj1hhY+Sr+cg7uVsSP5Wn0cFR+L1KWcF/wDUqQKXhckZ/iMI9dvqkbqrav3rAeOprn0y2OIAJKUnkvkmxuqq2QxjhmUl5sBMOhS8haQaxCzyLssCYgyrJgpuEipMJqLKn1qdxx0FFhIhnSVeyySWUdgrzJJXSci2CwOT0LmVwSDkzG4jBIOR43FcEgU1Xa/shoD4vwuPExmOVocDserT3B6FaOj112mnvgxe+iF0dsjxrm3lWTCP18UbvleB9h7FfR/GeWr1cO8S+jzmo006JYfX2ZpzVtJgslZar5LZP0y/UL4NficMHrkU2sWUuHEIispGyXHJdAuIga7cJBz2vgLCco9MVYjBMG1o0LZD0Lp/IA/DhHUxqNjICFTvLbzhiU7jtw/5X4dr8Vw0GjfxK9F4PSOcnbJcfBk+Q1H/AE0aYr1Ms/BkgOMxErRYZY8tSlrJXLpB6o1y7ZncVzgWXbdvLslv1Fg8tFHHYbwrmpknzaFEhqX8i9mlx0F8e45+7Q/H+G6RoIDsmpaD/N6I8rmo5RXTaX1rPTzj+oLwjmrD4ppyG+4PT1tB9dTWJILqfH26aXuLcfweOQXFTXduh8q/FZur8XVcnKvhkU6qdb93KM4yItcQ4URoQvK3QcJbXwzXjNSWUGQpSQOQfAl5CswtiEAZYEatlSYTsFhZZU6CjKbIPrXbuTiQR4kEXlL6i3jBKRAFLKZYkHIqtIwdzIquIwSDkWNxGCbXJyq8q0Ta5aFVpVohisOyRhY9oc1wog6grSo1M6pKcHyCsrjNOMjyXnTkl2HJlhBdCd+pZ5HuPNfQvEecjqF6dvEjz2r0cqXujzExJYvSpieT9KFfCZYPYlEm6xNV7Z5CxIEpGc01wWwVuSMyyA8TEqwkMVyFU7aKbi8jsHkgxqsyzeB5w3g7XAPf12H5r0XjPDq2Ktt6+jL1GskntiMp8dFEKJAroF6X1aqUox+BONU7HkR4jnSMPLALr7UB6156GlonjLYTBzZCd7CLHVp9oG9HL4BOI8cwlE5Q7exlbrfexapZqa+kgtemu+Wed8Q4hnxeXDxkNc0GgdGkXY+wH3SVtsYx3vgfrraWHyOuHc1SRNLDqNi1w+9Wr1OV7WVlp4yeWsMBdxNjGzGGLI1wJeG2RmsU4dh5bKstRFcfJaUJza3POBny/wA23la815oldvOGBt03HAPxzjk2HxX8dofBM7+DI0dDXgNbkXtus/yHj/We+PY9pK6rKcQeJLtM08DV5S6Drltl2KykvgNjSrAyCmITAMsaj1IqSTSeCD61zm0QdCvB7mcSJTMpKMSMFLysq2bky6R8CqqTOPrVtxx0FTGWTiYTcItoqz5WxJHEmvTFWoa4KtFrXLTq1DKOJ11EURYO4Ker1UoNNFHBNYZh+L/s4iklL4nmNrtcoFgHrXYeS9Xp/wCKbYVqLWcGVZ4qLk2ng3JK8ZOWDXKpQs/Vw3IvEHK89JSiwpxxVZckoHldooigsULMSmoDlZfwjAmR1/yjf8lreN0EtVb+F2B1V/pxx8jnjmNEEJI6DRewvapgoQMumO+WWeX43jmayXDXzSC6yzS6e1GbxeLD3jfNveqlLKyWy1wfOx7wQ27PW+nZQ5Nch4xyEfvTjuquXBPI95fwFXI4UXbd/VZGt1G72IJFYNBFwz4n/th3mQlqaL7OIdFLLoLth7uXHhvhDf7QK/wU7Pxd6W5PL+hZa6vODGcY5Zex2aFtd2HSv7b6eStXqpQ9tyaY1GyMuUwrhsWKLfhuaQ0756IHmPP0RLPIQjDh5IcY5z8msgZQA7BeYusdkm2BkFxFLSAyC2BD7YBlgTEeip9ausywkQFRYW916jR+A3wU7XgDK36LfgNC1I+I0lZTfJkHwNOxQb/D6e1YhLBKnJfBRJgnXpVLEv8A4b1C5i0wqviRdh3dknLwmsS/YSrYlDgRobCzrdLbV+9NBE0+jkbtUBcEtFwcmoX7SjRc1wWtVdCSwwbRL4YKaWjrsXtZG5o4YiEN6G6HK5J3I620epWLhoqyeVNqpvkjJFxS1kyTloEnwSih6xtRHIRFRWa85CAU6NEPAElFo8Q6eDT8PgEcYHlZX0Lx1C0+lX20Y103ZNtmQ5sx+e29Ag2T3SGqY7UeZMwBfKaFgWfzVZrKwhqp85YO+Gnemy6KwsFpvLyWDA0S/vrRXOtyJ9eMVhjjhWABeC800CzZ0OuiX1FcsYReuzKyPn8ciYfDTiOvT/j9Wl6dNXBZlyzpqc/wS/7wkDdALHbT3F7J+MkuheVC+S7hfN7jRz3qQb9eqj1JJ8HPTxa6NVh+NxyAB4ab+7umN8JxxYkxWWnlB5iQxeHi3jdRIJynY12PRZWr8JG1b9P/AMEx1jg9tgM1lGjuF5W2uVcnGSw0O7lJZQZEErJgpMKCpEAztomcEFf72xr2tdqT0HQdXu7NHdbvgdJ692+S4REotxDuJ8RbCzM49F7e+5QjgXppdj4PM8Xzg985aHaEHQeRFLJlvlya0K64rD7GXDuO1IwTOcA5wAAFucSaA8leqLc0pBrdJJ1OUUegYnFNjbmcaC2LJqtGBCuU3hGfk5xjz5QL0JB9EhLXS+EPR8flcsKj5hifo4boc9RC1bbI5RD0Vkf2l37sHDNEbC8/rfB7s2ad5X0U9Vr2zB/jarzU65R77DKOVlEhiQpTkjnWyYxY7pqvUziVdLLmY4dwnq/L2w/IN0v6JjiA20Ta8813Ej9OywYpEXnkU9I5aE55JIuKVtn+SUiolZ1ki6IFKTLA+IZamDCwlgqwcGaQDtqVq+N07v1EY/HyTdZiDY+xsgawk6aL6DfhRSMyCyzyzj+MBcaKy8GjD6M5hp3MeCw7mnehvRQ2xqMVjkJxcAzZgPyV2+AWOScMrdbGiKm0gMopvkH4vKHRmMabajcUbFUgqfORqMdpn8PiXNGR12Pex0OqrOrMsoYlYscDGOS91GMIWc8vIHgIp3SSCONzmjxEt6a9NdTvoNdF1jrUU28DC6Cf+vyQAmzoNjvY6UVNUHJ4A2BGB50JfG97zlLda/q/X3LZ0VbScPkw/INZ3HqWA4lHPDHI0gk6XoLAuh66Hz0WB/EXjm16sVyguhvTW1DKELwcll4HJMJgGckAjTfy9VpaDxd2p/C+wM5bey+XDAD5q9VvS/hypJZmDjZJvowLcS1zwJ3ZWNcXyt3fM5jrjY52lRtI+UDp6rX0rhpa/TguDS25Xt76X4+wbHY6bHz5GaN+xo/qKT1es2rfIKoworwMOF8mx4Sc4r4jpKY4ZHMBq68QPQij06lKaTzUXJQmsGfL+ZIIZi8JDK7EBmed2zna5f7Bs2/Jba1CXKQ44XWQVbl7foR8a5hfM7U+g6IM5uXLCQrhXxEzUeJeyXNJ10A6V5HqpjCMo8AJ2ThLk2OA4dK/DnEt+UWWjq6tyPofoq+g8ZDQ1MJTUG+zU8lYgPjJ+HMwirMjcodd/LrqBX2p7SVxUc9CXkYOM8ZT/oOsVLEBTi1U1FOmksSSYnBWdoR8Xw2RueM20/YvKa/xao98OYv/AAaOlt3S2zELsQe6ztiNRQifMndsucInOERnwyFx1KWuklwhTUTiuEPGNoKsa8rkzm8stJWnOZQgUpZLglEUumlyScQ5LJJXLG46N3V9Pp522KEVyWUkuWMOH4IRt7uOpK+jeM8fHSV/cvkUutdj/At5r4g2OJwsWR1Rr5pySIrTxk8elnLvm3vpaDbWvgaosfyW4OAXfRKPhj3wEYuQaD3KlMGwIzjZut9uil5IWMnC3Wyh4wMJ8C/ieHaTm2LeylWNPB0YphPCuHyzVlFN6vPy+39Xslrr41L3MIqkzY4HCMw7MreupPUlYtt0rpZfQwoYJfCY829jHf3NB+8LlbZBe2TRzgjL83cuBpOJib4TfxAB8pP84Hbv2PkdNnx3kXL2N8r/ACIXaaMmD8oY97YZMLI7Kyw6GRvzMeKcx9f7XAaddRsVtarVxsx9/InpdG62/o1f/eLwWh7WuYLaXAENleMpdTXataA4aWfm8lhx0WnrtdkVnPwxuNCeU+//AAUy86uYMsEbIgTdNFCzuU568sYjwgy0dfcnkQ8W5wnk8OcguNfTc/ryVk5SWZPgvGmEXwhpgOYGPeDiY2vFAE6g+pI36bqkbUu0DnQ3+14PR+WsbhZmuZh2gBlZqFAE7C+p3TLop1UHCSMm+Nlb9zLuJtLB5HqvHeR8ZPSW88x+GF08lN/k8n52bJFJ8RjiGO1qhVj5vTofdbvirvVhtfwOXycVlCfBYkuc09XVutWyGIgaZtyXI64tGXYV49Pv/wCEpQnuH9S1syc5V5jlgibCXEhl5euhJJB9yU81Joz1ZDOGjTHmeeQeAmvIILlKPDZeMKuWomJ4nzpchY0uc8GjuAK3tGWjlJbheeshB7TRctcyuIDXOtrtHA7a9kC+hqLg+mdC2M/cjUHhvY2DqD5Lx2pTpscGaMNTmIwwvDWgarPnbJ9ALNQ2+A6KMDZVgsvLFpybB8TxBrXVaN75covGltZDiUaU8gCJS82ySKA2yxYxtp7TUStltiuWUbwHQQZfVe78b4yGljua9wtOe4G4vxJsLSTunL78e1HQhnk8U5n48+bEZQ4kDp+amqtKG6RSc257Udhg0spKyf0P0wJmYNCXScmNOaigRz8wsHfb7tyrtbQSk5M4yMM9VVyCRiDTYqvNVTyFLeBYYyOL3io2nY/znsP9vc+3egaqxQj7Xyw1MGzVnGhYzg28sc2gmLx4aC9zqa3UkmgAi1UOUlGPbIk1BOTMHxP9osucjDtaIwKBeLJOniq9BvQ+q9DT4Wnb/N7MO7yU3L2dF/Ln7QsQxxdiA6WIkN0aA4OIJptANO2xNgLtV4amcf5XtkUhrp593I85m5hwDQ8wQsdI3QuzOYwvOrmNEZ8ZHV2g2okmkvpNBqF/+0uP8lrNXjO0pwHO0b4hh5cG6RjXsaMoDA1z3nxF1211OADdzRJPa93ipKTsrnh/8go6uW7Jsn8u4TQtzOB28dtPnY3+q889bem4tJM1a9z5yK8XyPbzJA4a/wArtx5Nd29UxX5VY22LBaVmOGY7i7ZIH/De1zXnofv81safZbHcnwWjLPR6l+zKRkOGawVme4veb3J/wE1Xbhmfqq3OWTfODZGlp1BTNkYamDrmsmb7q5ZRgOduE1C9jtQNWn3r66rzVOls0erUfhmvC2N1fPZg+A8MLpmNaDuAOwW9nehZfy3k9PxPLWXDyZqrIfc1p9q6GlknuZNmsUltPK3QFmYg0SR9OycUE+xJzwbDl+Ko23uRZHXVZmoWZ4RrUJ+nlgXOvLEcEzJmt8crbf8A3XuE56k4QUDPdULZOYg4LAGvcLvUEAdPVDusbSJqrUfg9c4T/pMvci/tXhfLyzqGFXQxCzVwipRjMUGNLiUStOWEgldbnLB57jcW6R5fZonRbldcYRSNuFajFI9KWK2jz5FxQJZZKORgnojafTzumoQ7Ik0kNIIKHmvonjfGQ00ctZkKTnln2KxAY0krQts2xKJZPKuf+NOIcG2SegNJOmvfPLLTu2R4MbwmcPNltHvv9UfUVSiuGV09ym8tDnEMdWhWblfJqJ/QvZC+xmIPfdWzFdFPc2WvBGpI+nRVbbCJbRZPiLPzaXXRQ4Nl1NJFfwCRd9ey6UNiyXqtUpYHMEtAAaAaBZ01l5ZpxSSCWvvqgtFxVzf/AOmLcjnhzm5gwEkNaczj2Gjdyn/FpetlvGEIeQf8vhZPOsTiWlwdla1o+WNmzR/ufuT57+nT0sU0sZMCT5zgJxLiWES5s4/hxQsGVkd7l3mdRlGpPzHSjCWHx19kN8cmhg5beSHQMIbDRnxE7vhQksAoDL8rWkagEvJBvKdErLUxg9s3y+kuWTsbXAi4nO+UCntdG17msAAij1GrmMJzXqSXu1+W+yZglH45Ow2eycqQObh4Iic2SNosag6XodNF4XyU4yunNHoqoenUkzX4KOvwWHbLIra8mf8A2i8L+JEyZu8RIP8Aa6tfYgfVavh9Ttk638lKHh4MvwjEPAAaNtLXoo5GuPk9P5OdI5uZ506J7SRecszda49IXftG4j4BEP7j+SJe1KS46B6aO1bjNciyj4uYt2+wDco+noWRbVappGy5k5gZkMY16O7ai09ZQ9mRCrVxlPB54zhRmkAYLv8AWqTjnofk45yb7h3Kz2uY5zhlFEj06JWOle/LHnrl6e1IQcxY4zzyH+WNxYPbcp7WVqutL57MzRWysm/pCDD4UNcX1q78Nlkzk5cGjtwb/hk3gYPILxvlYfz5Box9uRhipg1tlZkY7uClcNzMbzFxQvOQe/5LX0mnUFlmzp6FBZFsUeiYb5CN8noeLxTY25nmh9T9EPxvgNXrVmHCPI6vyFGmXvfP0DQ4wySMZE28wzOcXABrboHY2T2Xol/B9ddbdtjz+PsR0/mFqLNtcOPyaPDwBo/FaGh8ZTpI+1c/Y/ObkTkkDRZTs5qKKox/MfF9D0AWdJubwF4isnmWNlMrz57JxYriJ49SQVw7hbYxtZ3Sd2olMfpoUUWYt+tBKdscXBQSAPXZcy2BVxiYgZRqdx+ZRYIrLLF+Gw7jq432Fbdq/X4JpSSQBpvgMe0tFnQOI09h77fel9RNSWBnRVNTywvDlZs0bIbEUvJFi6WH4kb2XWZrm32sVa6ueyal+Qdsd0WjDcV5cMUnxJQTGXZgyBri2gBbS6gGbUNL816bT62F0cQ4f5PPX6WVbzLoXxPlnc+UQsAjBDGjIyKMu3uz4nZWk1qdC47FNJKPDYs8yeRliMPI9gbjp3sY0NEWHj8bwK8IZAzwRX/U+id6J1S7cYyzCKz8t/8Av5/sXjBtc5/sMOVOU3OfndGWBx0a+i4DQjMK1PewB5FJa3ycK4tReWaGm0X+6awewcMwAjaL37rw2ovdkmNW2Z4Q3YKCSfLFW8sExrw4Fp1BBB7UdwUxSnF5QSuJgZuGlmKZGw/w3m7PStwfRer0Vvqx/IxZ7Y7mbqfjscDWwx9W2CPovS6SrMW0ee1lj3IyfGsZ8fW979+n4oc6sSCV2+zAv4RKWk1YPX8dUeqSi0KaiO6PBZj3kmzem/sdU7Za5dGfTUocs03A8Y2BokeNXOa0AeZ/JL0Vb5NDd9uyKeDYO41F8QQudTnAnyHqeiMtPPbvXQH9bXv9OXDPOuZZBDKGMbmY4nxijqdyQPNJ6tOxZkPaRqDxEEYLIAWO1g02+DW8PNUL2A+xeP18/Uskx3bitFfH8fWxQtLTnsNpKfkyzGWbPVabeFg0G+AsMQcgsDfm/Eauo1T6+mg+5fYPG0xjFKKPi/lLHZqZZ+B1yi4F52/0Y/veldcsL+7NXwOPcaaWUNFlZNliij0sVkzfF+KXoFnWWOQZQMJzDiyRXdF08Ocgb5cYFGCgN2dlW+z4C6asMfJSSbNBJC3ETgEuOwXJErkHfPlb8R252H3ALkssu8dIUOeXOsi7Op6enojRTfQJ8B7W00gdwPqbKmbeC1aWSXFX6xjr1QHyN08NsS4Djrs7S50eRzpBWuZjWAkOOtVp2TNmii4NRzngDHWS3rOMcjpnGocof8RobeW3WDdXVEXsb+iReisTxjkbWrqxnKCMNxRpe9lgFrg0G/mOQPOUeQIVLNJKMVI6GojKTiRl48fF/DzQtL2veToMjSXHJRtoIq+/RFr8fhJ7sSAWalNtYygeLgmDnyOcSzxuBjY8sYXhoc9oBbf8t2K29KNZqtTTmKWeO/wA/T0WYk3j8GiiwUMdNhiYz0Gp8y7cnzKxrNRdNtzkaVVEK1wjXcF4WGNzO+Y/YsXU3t8LoWvv5whqCL9EmxZnZZF0YnRiJ8diKBTtUB2qBmOOyn4bnAHMwZx6AGx9CVtePey1fk7VwzUxTPic0MZsnQ2fI0aXrtPZ6cmjzt1fqQTKYcdmrU0OndMNC2eOAvCwGqFg61rfdAm9r3IJDE1tYdi+IRhjWvsFwq+lgXqUaqMp8x6FrWo8SH3C5WxYfMfFlaXNzamwCRqhKTlbgJhRryE8mW+KTFTkZ5DYvZreg1Wpq7NijXX0ZenqjOUrJLkV8U+ECSytfmo2LWRq7JtYka+jripZiVcvQBzyb0Gqx9R7apP8GvL9yQ7+NRJC8g47uzWUMrAmxcxeU3COxDUY7UTjjoWVEnlkMqfPqrKJUhzhiQJpmO3bI7tdE5tPYr7d46vdVFo+L6umS1k/rJLlXmcRTMLjbXRuYfUEOb9xS3mdNtoc18M0PDRcLpR+zU4/j/xB4TodvyXhpWOTPYxgkJJcST1VS+MGd4m+5PsTUXtgKuG6ZI6ADskJyyzSrgooHxMtBDLtCVsmd5J+Vv2nqfwRGuMErhFOImzO/DsPzXJMpuSKWWTdih+tk1XDAtOzIygZdV7/AK6odvYelg3ELeSW70a860+2kCDxPnobbcUZETtj8LJA1/w/hvsPafnDjRy6dRa2Em+X1ngzHJR4jw8c5CsLO1hzZ4nZviAh0hcBnygE3q8ZW1XmqzTksYaJhJRecoK4VjYYZXSOmb4w7QB7svjBaG5W6DKBevTyQb652wUUugtVkK5uTfZVFJAQM0rNGuYXCKayHyhzy45f6cwA6ZiiuM10v8/gEpw7z/gbYprXfElZIx8ckv8ADAY6UND2h7w9jdQXvZG2nVoHd9Q1TcUoSXKXPxkJOKeZJ8N8fI/5Hc795YwzZmBjsrSAQ5sQbE7oHRyNkHXRwfosvy0Ifp3Lbh5/y+f7oNTbPdt3cBWH4xL+952nEBsmLmAcZLw7oYYy18bYsxPxLjJFNB31pRLR1PTbJJPEV8e7L6eReLbnn8mp4dzXAWF0pfE4ODTG9hMmsYlHgjzEjIQ4noLuqWHd4a9S2wSlxnPwMSugy6bjbHGUMtzYsnib4g7OwP8ACBqaa4H3Ql46cFHdw3nj6wFpkpMWYyS9b0/XdErjg1I8IDheCC0i82h99PxR0mpJopYsxaYuwnBZxcOXMWdh0OovzF/q16uEW8SPOTlFJxBZ+AvY7S2k65T6pn9R8NCy06fKZaMRkoFp0N3qiRjuTF7JOEsDD4Ucrmsd8x1a7fbawpUZQi3ErKyMppSGUUeQlhB9tqPZJq15yOeisYQfintMJiacvt96ar1DUstCtul9rSZgMY90EuUGwd/Xumb5RvjnAtplPTzSzwzUcs4oNfrs7T6rAtr3JwZvuWUpIO4q/K4s6/h0XmHQ65tP4PQaV+pBSKsNF1Q5yDSZzEv6BdBfLK4KBAibicCL9q2PEeOeej2tcPplP/j9q+2eE1MXpl9pnzPU6RyubRhBxs52naiD+aP5KcbqJwD6XTenYpG64VxI9dl8wlLEmmeldfGUN24utTsrReWUlHgWRPL3F3mjXSwsA6IZeQkupJMbEPGMdlaa3Og9USuGWUnYkgVjssbQNh9p6o3pvPIvK7JAsoFyLXXyBnYdkGRovdNQhngWlZgNdiCIQRu85W+/X2Fn2SdsPd/Q09LLKK5YcoAbvX2bJPtj6lkolwkb6bJHmPct/wD0NkaErIrMZALFCTw0UP5RgJsOe3TYEV9SCUb9ZZj4BLSQ7LoeWMNsWu0/3u9Cl5+QuX0MQ0NMusjKDk/DOaaMrT3bIT9jrB37JeXmLYy5SYR+NqxhNoSy8s4uB7nQSXf8zXCNxrYPYRlcn4eQ090fesf1FJaG+t5h/gvw/GeI4QGSSJtkW55hY4OomgXwkEdN+qrKjR6lbVL+iz/7Kbr63mS/wC4LisUoc34UzbbIGfDe6ZkTpR4y2MkGyCQdf5nbJmVFkGsNNf07x1yCVkJLng0fBMU1hDsLLhTITOfgvvDsaZY4WMeIzmsBsZtodqHmik9Ut622KSjxyuXw+V/9JhHnjDL+F4JzMXI+UUHCR8LAAGRZXthblrS3RhldQNO9qay9S06jB9YTfy/n/wAj2lrasyxljX9vdZVcTVOcGOeeJvd4v0Bs/cU3TXumhfUSxW8HozomRslc2hmIJ1uiQBt519q9dWlwePsb5MTjMRbnEm2g+tb7Ht+uiJfSmsoHRdKLwxFiXua8Ai2nT/H+VFcVKP5R103GXI2GFsMeNHN6fgEGM3HMWElFTxJBmNxLmNc9upAB18t/xQ6qlKXJa23bEQN5hc40dL+9bcdHGEcmLPVyk8CHjeHe9x1zX+qVN1aXRMXY5dhnL5MYEbum34j2WNq4py3RN7S2vGGbjFtEjI5OoGU/h+K875KGMTRu+LufNbKb0WH8mw0UvCujkiFq2DjJ/tD4c/FFkjKzMsGz/Kf8gL2+j8n+lTT+TzNeglqJ7YdmNh5acfmfXoEW3zUpLhGtV/DUv98jU4dvw6bd6DX7FgznubkM36P0faxpGbG+iJXZyZl1eCUIy+6NL3Cie05iZCdB1VMHSnwJp8JnlHUM39T+Q+9NVLgVtsCHQXQ0CNgX3LJVix0HU610A3P4e6PVXwCttKHSF2lfX8EbbtWQHqOXAdg8MSWlw0Y05R7gX7/h5rKvmnLCNfTKSiMIsCT4juUvgeU+MEn4QjcKUgikBY5tCmn3V4LLwdOeEGYRwrxbIc4JvDLx6yg+F4aD26LL1FDT4HabFLhlkeviKVfHCGjpkXJNENJnJuA4Wbxywsv+ttsf/wDdpBRYeQ1FXEZZ/D5ErdJXP4EHHuWo5NIppOwbMRM2uwzDMPYrT0/lZ/8AVj/xwLT8Zx7WIY+DcRw5aIs2TMAXMeXsAsDWJ+3e66J56nR3r3Yz+eBT0dTVLjo1uKlv9eywox+jd+DS8g4EAyYp/wArBkbpu5xFkdyNB/8AIrY8bp3ZYmYvltSq63gc4eOZzJC5z2mR7juaa30Og27L1F7gsRieQ0nqPdKXyZLmZoB8FmumpF999KVYrL5Ct4XAlwMrn211kjxfaqWQUJbkdCzenGRpMHLmbQ6Gv19UvdDa8hqLMrBHiRJBAGtajv3pVpWJJlrnuTRihFkJPSu3nVLfjNOODCsTTJMlebsi6NWkr4xT4GaJMHxkzo/gkvqnajv3P67pOMFLcsGluaxhnonBpg+Ms7jT1GoXn9ZVurkja01uyyMjmdeWxyepXKyDyOV0ScCk4V4olbtqyjE0lrrsUhJiGU7y6IcXlcnuaLVZBSRTK/Y9laKAa2lWQyuy3D4zsVDg0ecsh+A5rs1X9iqrJREbKk/gsxLmtboWg+oTFVnOWJ3aebXtQshcQCCKJJJN3a0I3V/ZmzouXaZS+WtgTWyOr6/sCtPd8JgWIxMhN6NHnqfp/lT+qrXXIevxWos5fB3BNfd5c3mfD60BaXv1iax0PUeGjF5mxvFiZwS6m61Qo6AbAUVmysgzVjo4JDXCcTk/njHmQfwP5obtS6Zz0n0FO4gw7gj1H5KVeUemkiD8M1wNU7qjwtS5RRx+GhTjpnREaeDyFkfmmYQVv9QM7fSf4DMLiQ5vcFL2Qx7ZB4WZ9yK5eKAO+HrYHb6LPelfZpQtW3kvgmc7+Uqv6aRWWoggpxkPhA0HmrrQyXOAS1leQ7C8DlIzUHdgD+aiWltfSJetr+WVY7Cz5dInZdgWix6eG1WGisT5iQtVS/k5wflPEYgg5fhx3q91XQ3pt2T60E9Xo559ywL3a+uKe3lm2jkY2WHBwtPwmElzujnNY4hp/wB1+I+i9NptMqaG/n4PKarUSuvUfj5GU84aPCBkoDTSugCrj5ZO7DwlwYXjUFvtumugP26jRV9V4wT6UexIzC5Xggevp1+9HhLfBoUtjsmmaFsDWFtbuv7v+ErmUoNfQyopTT+yp0Xj16hRu4OlHDyAcR4WaL42gmvE38vNHp1P+1gLdPlZRh8ZGSdbH4LRUltz2ZqypYBMfw8+ECzvZ/5S8LUm8juGjacm4s+EO3bQ/JY+rglLKNXT2Nw57Q3xjsr3DsT/AIXkLa8TaPYaee6pMCknAXKtsO5JAbuKf0tcR3R1pinqRLntsLSkzAjwxXi4f8JbOGeh8Xq1F7JC4hFyejFuKwxBsXSZhNY5ErNNDO4aYKI5QDfulrZLJm2Rju4CRCOw7oW9roC0iwABV7KtIGljc7bZFjJRKFuG4TrZ1KpPU44RHIyZhKS7tydgJiwloMrC6DG4VBdhbo+dggd1KtZOQV3DNbGnmNCix1GCHFPsDxcxb4ZG5m9619+60dPqG/kVs0sZdCycBrC6JwLRruABWpu9loKW98iMq3UE8Eyuc57juevYAD9eqptWcF5y2pGohxLOlK2NrB/uXADTA4uDqd371dDz1KNKeUBrg4vkfYFpJ/1n0Q0ZQaquxGoR4XRjBJLkUtplKxyb4NNHIzKBoNjVD7UP1echFWvgGx+IOHjjbA4UXUQdKzGyb6ir9LvVO13QnzLsTspmniJzDG3aDLdHfU9vF10+5NOa2IRlGTswXY7EhjaH+PP/AJQFLcHs9qwhDjIMws1rZvzOy7gC2wGGIE7dCLUp4IfL5GM2GY7K8gEsFt8tKcB60ECMsSaG5R9ibFuLf4yANtkTCihfLkz7D4gHW/b07Je2PyM09YM1zHB8RwyU03rpum9Pbsj7hTUaffL2iPFSfDGV9e6vhTeYgcSrWGNeV32c/c/5SWreHge0i9uRpzBxt8OMZGIGzNliD255CwCnZXBmhtxPSjecabpJ6Oq2LcuxyN1kH7WanluPh2MoZXMlIv4byddL8NgB/U6XprsbVYeNr5GJ6237NRFylhAK+ED6ov8AptYL9XZ9nkGLxzWC91lLMnwadNDmwD94LtT9FVxwzTrpjWUvFlWQ/DVzSwFw4fS6Q5TwwM9ROXydiaqyYJsk4KEQcjhJUuWCowgwqWlYVwGR4dBlYcW/u1qvqHBMUFIUpkhUcaG5HZPixRk7J34Wi7cdkTY+HMcoFk7J6mW1ZCGf4xhBAW5Iw+gc9mr7Baemu9RPLwAtr3ojheMgCjA9t9qKaxt6lkXlpnIMhxTDqLb6ikOVv2V9BwXBcW5qN352rq0C1+BlhZnAaFX3pgXgJ/6g9o36LskqKZJnE3EhrtfD+h+u6smQ4hGK5kDYg/bK0k+uopaWmUptRMfVOMMyIRcQMkTTdEgEgfU6piclB4QrCDmssnicfbANCQqJ+4mUOCjBz5d/yRJJMDDKeArE8SAFabd0CMMSyNueY4BsJiAd96VrE2dBxiV5QDY6/RK2SfQ1XFdivFtOY0LUKzjDLOvnKAOIQ59CwUO6JCzb0wE6nLtFnCog0UEG2bk+Q1daisIY84s+Jgc7fmhcHHvkd4XgH1yH2UReSkkffsn4x8RvwxLGHwtcGNcRm3cXPs6kEuII7BpvRNV7lZhrsz7p2Qln4PYsHiczATv1rawel9OvumJcPAzXZuimfnR9lhJ3Nf8AkF5pfu4PcVYSwRif0C6SJYWyM0guXwUyMsO3wJaT9xBWxhCu5ZOLI4rVHIkNggAQZTZwU2NBcipfDapI4La0IOSpdDGqSkRJk8lqMkZPnRrskqRHE+FnqrQ5Z0eWD4SCg6Q79PJEnPqKLzllpC3G4O2l56lMV2YeEWzzgEwmABBFDyRp3NMk+ZhwLDguc2+mSiGI4aPmYa9FML30yrin2VDM0WCUeNrBS08GfHFO7InrSBfpYnW4rW6rbz0vX9eSIr2AnpXjgp4nGJAxnTPena7r7VtaDUpJs895CiXCYzgOUeg/wibtzyRjasFck1UB1RE2VeGfGfRc7SiqFuIxBza/r9WpVhdVBrWOI0NEqfW5OdHAx6DyCStfORqlYWAWUC7QcjawCYiQVSrk5xKsPY6KwNoKxGKaIZWv1a6NwcO4LSCFetvcsAprJ5hDAHtZFh2n4lZw8aO8wXCtKJrzoLQVjjyxSTWPcuD2fkDjmIgwobiZM73OzNJuwzK1rWm+vhJ91SzUe4pGmKXtfBi8RH/D9h94XnoS9x7mopw8B7KZzLMNeKahJ5ZRh0XyBAl+4qWNaqZOCI4+yo5EBcUQCDKWSQ2OPyQGyoZDhxugymDciL2WdFKeC6eEW1QVO2U7ZOAaKJMrNnTuozwd8FWNYr1vktUVH5Q1X+csv+SviTKYGq9TTeSK3l5F7RlpH7Ck3MB91VNo4gxlaVorOWSSmSCr00V4zIyL54a2TEZZOKcitkhnCxEhZKPTAW0wsWJIvEljsU/RrOcSMnU6BpZiDveQaIWtC2MkZEoSiyefQfRVkFgwcNt3tSE5B4RG0NVRQ3NoOopoKkZY0K7fkE62gSQbj9eapJhYIAbgNXkkkOINf07bfRX9RYRGHklEMtgknt5e6q5ZK9CXmrF1h5ADqQR9UShZmik+jGcvyNfKGSPyNLQL/t1Ar8E9bB4xFGfqE9nB67gYQ1gANjcE9Qdj5Kk/a8MFTHME0J5Waey8zF8nvKmVxKZBmSm1odVEeCjQc1t0gNlGExBDkQFMCCzgqJqE2cH4ePZAnLBSTCpNAhLlglyweI6oj6Cvom82VVdFV0Xs2VGDZEriUUYh1okVgJFH2FZZBUzeEdZLCK+LlWoOo6F9JgLkkVBxZEFSRWTOmO1ylg7IHPhEWNh2QN2HpHVhOSh8SupHFeVWyQztXuiQunDpi9mmhPtEsgrZMR10vkUfjl8MixjbRI6rL5Ky00oov90xvWBflMlFOTsuyTnPZCQOV08lG8FD5R1d+CkhvIj5i422FljUnYdyi1VObBSlhGBf8XEOLibs1ZNNF3Q106LR9laFbLMcsM4DwB00/wAN5yhurtRZH+3Qg9NfNdOeI5IjKM1weuYcZWtaNmgAe2iTlJyeWWUEuELZQvNxZ62t8AmWijZyMZPhuufRVjOKqSsirCIwhsqGMaChZa6IDYGIE5HMZwR0ErJ8gJMrxDlaCLQRTGiMuyyNmqq3wVZfXkhgyiV6vFBEig6lXLoOwsdIM3kBN5AeImyUenoLVwgJ/RGQVHSuyR8k4eqrIpMvA0VMlc8gzjSui5W9oV0yAWSNFjInIK+FFUiCDmkK2ST4LjiiRXiSI+YcXiImiSDUAnOCC7StDXQb7LX0Ppz9ln9jP1tbS3QQmHOli3MLXj+k20/Xb7U7LQc8Mylf8NEm89aU6I+zh+St+i/JDu/AmxvMM8jjkto6AC3e5RoaaEewcrWKZ5Xu1eXH1tMRSXQPdk2XKQhkjY12Gc45iC6zR0vf3uj23QlVFzbnLAhqYWKSceTZYThzWa1rsPIdgh225W1dDGnp2e5hTkvgayDzhebiz1MAKRto0WMJkApIYZg3IVi4KNjKIJWTIDoWIEmQMcPCl5yKSkGPNCkBdgVywCRyYXQeKOhccy+MqjKM7I9VSISBXvtGigiROEWVEujn0Hg6JbHIs+xVObcU3HoY+AQ7oy6Ckr0UfJVlkWyrIpImHquCpU8KyLpkCFYkrc1WTIK3RhWUiCh8aIpHA72K6ZOSmQK6ZIOWIqlgl8oScS5agk8WXI7qW6A+rdlo0+Qshw+UZ9ujrm+OxVieUWnSN1O7G6J8jrXv9U5DyOXyhO3x04rKZVwThM0UuWSJjmOsFxItulgjKc3Qf4TFt0JQ3ZwIS08pPaaN3KMLxRLh3F5qN7gmq+iivURzlci701ieE+R7wjhbII2xMsht0XUTqb1IAVJz3PIfGA/4a5IgqLVODsn/2Q=="/>
          <div className="card-body">
            <h5 className="card-title display-4 mt-4 text-primary">
              Racksburg School Supply Drive
            </h5>
            <p className="card-text">
              It’s that time of year again and this year Rack Gives Back is participating in a school supply drive for the Pre-K and Kindergarten students at Prices Fork Elementary.

            </p>
            <br/>
            <h4 className='text-primary mb-3'>Current Progress:</h4>

            <BarChart/>
            <div className='text-center'>
              <button className="btn btn-primary btn-lg text-center mt-4">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;