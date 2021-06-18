import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.moviesArray = [
            {
                name: "Bambi",
                synopsis: "It's spring, and all the animals of the forest are excited by the forest's latest birth, a buck fawn his mother has named Bambi. The animals are more excited than usual as Bambi's lineage means he will inherit the title of prince of the forest. Along with his mother, Bambi navigates through life with the help of his similarly aged friends, Thumper, a rabbit kit who needs to be continually reminded by his mother of all the lessons his father has taught him about how to live as a rabbit properly, and Flower, a skunk kit who likes his name. As different animals, they have their own issues and challenges which may not translate to the others. Being similarly aged, Bambi, Thumper and Flower may have to experience the uncharted phases of their lives without the knowledge or wisdom unless gleaned from those who have gone through them before. Bambi has to learn early that the lives of deer and of many of the other forest animals are not without their inherent dangers, for deer especially in the beautiful albeit exposed meadow. Bambi will also find that his ascension to prince of the forest is not a guarantee as other buck deer and situations may threaten that ascension",
                image: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/share_link_image_large/public/screenshots/csm-movie/bambi-ss1.jpg?itok=yHHWFaQf",
                rating: 4,
                reviews: [
                    {user:"fred", review: "Not my cup of tea", rating: 0},
                    {user:"ethel", review: "I loved it", rating: 4}
                ]
            }
            ,
            {
                name: "Old Yeller",
                synopsis: "Young Travis Coates is left to take care of the family ranch with his mother and younger brother while his father goes off on a cattle drive in the 1860's. When a yellow mongrel comes for an uninvited stay with the family, Travis reluctantly adopts the dog. After a series of scrapes involving raccoons, snakes, bears, wild hogs and wolves, Travis grows to love and respect Old Yeller, who comes to have a profound effect on the boy's life.",
                image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/446FD95DA18B957C6AD91EA2AC4FA6706227429AE0E71FA85DE7AF05DD8B2263/scale?width=1200&aspectRatio=1.78&format=jpeg",
                rating: 1,
                reviews: [
                    {user:"fred", review: "Not my cup of tea... blah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah", rating: 0},
                    {user:"ethel", review: "I loved it", rating: 4}
                ]
            }
        ];
    }

    render(){
        return (
            <div>
                <h1 className="result"> Movie List</h1>
                {this.moviesArray.map((movie , i) => {
                    return (
                        <div className="border border-primary">
                        <br></br>
                        <Movie index={i} name={movie.name} synopsis={movie.synopsis} image={movie.image} rating={movie.rating} reviews={movie.reviews}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}