import aboutImg from './82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.webp'

function Aboutpage(){
    return (
        <div >
            <h1>ABOUT</h1>
            <div id="aboutPage">
            <div id='left-2'>
                <p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <p>
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
            <div id='right-2'>
            <img src={aboutImg} alt='aboutImg'/>
            </div>
            </div>
        </div>
    )
}
export default Aboutpage;