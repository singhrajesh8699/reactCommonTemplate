import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getHomePageData} from '../../actions/HomePage';
import style from './style.css'
class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getHomePageData('This is raj')
  }
  componentDidMount(){
        
        navigator.getUserMedia = navigator.getUserMedia    || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if(navigator.getUserMedia){
          navigator.getUserMedia({video:true},handleVideo,videoError);
        }

        var offset = 0;
        function handleVideo(stream){
            var v=document.getElementById('vid')
                v.src = window.URL.createObjectURL(stream);
                v.play();
          
            var canvas = document.getElementById('c');
            var ctx = canvas.getContext('2d');
            var cw = v.width;
            var ch = v.height;
                canvas.width = cw;
                canvas.height = ch;
            v.addEventListener('play', function() {
              draw(this,ctx,cw,ch);
              ctx.drawImage(v,0,0,cw,ch);
            }, false);

            function march() {
              offset++;
              if (offset > 16) {
                offset = 0;
              }
              draw(v,ctx,cw,ch);
              setTimeout(march, 20);
            }
            march();
        }

        function draw(v,c,w,h) {
          if(v.paused || v.ended) return false;
          c.drawImage(v,0,0,w,h);
          c.fillStyle = 'red';
          c.setLineDash([4, 2]);
          c.lineDashOffset = -offset;
          c.strokeStyle='red'
          c.strokeRect(10, 10, 100, 100);
          c.fillText('Hello world', 115,30);
          setTimeout(draw,0,v,c,w,h);
        }

        function videoError(e){
          alert('error')
        }

  }

  SreenShot(){
    var v=document.getElementById('vid');
    var canvas = document.getElementById('c');
    var ctx = canvas.getContext('2d');
    var cw = v.width;
    var ch = v.height;
    var img=document.getElementById('img');
    canvas.width = cw;
    canvas.height = ch;
    ctx.drawImage(v, 0, 0, cw, ch);
    img.src = canvas.toDataURL('image/webp');
  } 

  render() {
    return (
      <div>
        <div>Hello fortraiz! {this.props.home.data} </div>
        <div className="container2" style={{marginBottom:'20px'}}>
          <input type="button" value="Take Screenshot" onClick={this.SreenShot}/>
        </div>
        <div className="container" style={{marginTop:'20px'}}>
          <video id="vid"  className="video" width="300" height="300" controls autoplay loop>
              your brower not support html5
          </video>
          <canvas id="c" className="canvas"></canvas>
        </div>
        <div className="container3" style={{position:'relative',border : '1px solid black',float:'right'}}>
          <img src="" id="img" width="300" height="300"/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getHomePageData}, dispatch);
 }

function mapStatetoProps(store) {
  return {
    home:store.homepage,
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(HomePage);