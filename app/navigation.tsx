'use client';
import { useState } from 'react';

export default function nav() {

    const [someCount, setSomeCount] = useState(10);

    let tweets = ["Hell world", "I just drank oreo coke", "#code4lyfe"];

    let tweetList = tweets.map( (tweet,i) => <li key={i}>{tweet}</li> );

    return(<div>
        {someCount}
        <button onClick={() =>{
            setSomeCount( someCount + 1 );
         }}>
            Increment count
        </button>

        <div>
            <ol>
            {tweetList}
            </ol>

        </div>
       <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
        </ul>
    </div>)
}