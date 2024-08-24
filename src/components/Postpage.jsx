import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Postpage = () => {
    const params = useParams();
    const [data, setData] = useState(null);
    console.log("Params", params);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
            .then((data) => data.json())
            .then((data) => setData(data));
    }, []);

    console.log("Data", data);

    if (data === null) return <div className='loader'>
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
            <div class="wheel"></div>
            <div class="hamster">
                <div class="hamster__body">
                    <div class="hamster__head">
                        <div class="hamster__ear"></div>
                        <div class="hamster__eye"></div>
                        <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>
    </div>

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default Postpage