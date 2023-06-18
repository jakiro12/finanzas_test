import './App.css';
import arrowLogo from './images/pointer.png';
import svgLines from './images/liness.png';
import pieshape from './images/circledata.png';
import barPhoto from './images/barChart.png';
import engrane from './images/gear.png';
import theBell from './images/bell.png';
import message from './images/msg.png';
import gift from './images/gift.png';
import graphicDetails from './images/pieData.png';
import SliderImage from './slider/Slider';

function App() {

  return (
    <article className='first_container'>
      <header className='navigation_container'>
        <nav className='navigation_items'>
          <div className='logo'>
            <button className='menuList'>
              <span className='line'></span>
            </button>
            <h1>Test</h1>
          </div>
          <div className='input_search'>
            <input type="search" name="" id="" />
            <button>
              <img src={engrane} alt="engranaje" className='gear_btn'/>
            </button>
          </div>
          <div className='btn_container'>
            <div className='btn_options'>
            <button>
            <img src={theBell} alt="engranaje" className='gear_btn'/>
            </button>
              <button>
              <img src={message} alt="engranaje" className='gear_btn'/>
              </button>
              <button>
              <img src={gift} alt="engranaje" className='gear_btn'/>
              </button>
            </div>
            <div className='user_btn'>
              <span></span>
              <p>nombre</p>
              <img className='icon_arrow_name' src={arrowLogo} alt='icon'/>
            </div>
          </div>
        </nav>
        <div className='sub_bar'>
          <p>
          dashboard/
          </p>
          </div>
      </header>
      <main className='principal_data_container'>
        <aside className='analitycs_data'>
          <div className='circle_data'>
            <div className='title_and_week'>
              <h4>Best Sellling</h4>
              <div className='day_data'>this week <img className='icon_arrow' src={arrowLogo} alt='icon'/></div>
            </div>
            <div className='date_data'>
                <p>Tuesday</p>
                <p>215,523pcs</p>
            </div>
            <div className='shape_data'>
                <aside className='big_g'>
                  <img className='info_pie' src={graphicDetails} alt="grafico de torta" />
                </aside>
                <aside className='vertical_bars'>
                  <div className='horin_line'></div>
                  <div className='horin_line'></div>
                  <div className='horin_line'></div>
                  <div className='horin_line'></div>
                  <div className='vertical_lines'>
                    <div className='day_bar_container'><p className='day_bar_1'></p></div>
                    <div className='day_bar_container'><p className='day_bar_2'></p></div>
                    <div className='day_bar_container'><p className='day_bar_3'></p></div>
                    <div className='day_bar_container'><p className='day_bar_4'></p></div>
                    <div className='day_bar_container'><p className='day_bar_5'></p></div>
                    <div className='day_bar_container'><p className='day_bar_6'></p></div>
                    <div className='day_bar_container'><p className='day_bar_7'></p></div>
                  </div>
                </aside>
            </div>
          </div>
          <div className='quad_data'>
          <div className='ticket_information'>
            <div className='title_and_week'>
            <h5>456K Pcs</h5>
              <div className='day_data'>day <img className='icon_arrow' src={arrowLogo} alt='icon'/></div>
            </div>
            <div className='ticket_info'>
              Ticket Sold
            </div>
            <div className='bar_light_container'>
              <div>
                <p className='lighting_bar'></p>
              </div>
            </div>
          </div>
            <div className='ticket_week_information'>
            <div className='title_and_week'>
            <h5>451,509</h5>
              <div className='day_data'>This week <img className='icon_arrow' src={arrowLogo} alt='icon'/></div>
            </div>
            <div className='ticket_info'>
              Sales
            </div>
            <div className='shape_display'>
              <button className='btn_size'>451k pcs</button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path  className='path_curve'  d="M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,213.3C672,256,768,288,864,256C960,224,1056,128,1152,101.3C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </div>
            </div>
            <div className='ticket_week_information'>
            <div className='title_and_week'>
            <h5>$456,623</h5>
              <div className='day_data'>Monthly <img className='icon_arrow' src={arrowLogo} alt='icon'/></div>
            </div>
            <div className='ticket_info'>
             Income
            </div>
            <div className='two_lines'>
            <img  src={svgLines} alt='icones'/>
            </div>
            </div>
            <div className='circle_and_datas'>
              <div className='circle_img_container'>
              <img  src={pieshape} alt='icones'/>
              </div>
              <div className='information_quad_circle'>
                <div className='week_time'>
                This week <img className='icon_arrow' src={arrowLogo} alt='icon'/>
                </div>
                <div className='ticket_type'>
                  <div>
                    <span className='quad_logo1'></span>
                    <p>Ticket A</p>
                  </div>
                  <div>
                  <span className='quad_logo2'></span>
                    <p>Ticket B</p>
                  </div>
                  <div>
                  <span className='quad_logo3'></span>
                    <p>Ticket C</p>
                  </div>
                  <div>
                  <span className='quad_logo4'></span>
                    <p>Ticket D</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
          <aside className='graphics_data'>
            <div>
              <img src={barPhoto} className='bar_photo' alt="imagen de barras" />
            </div>
            <div className='carrusel_container' >
              <p>Event Galleries</p>
              <div className='display_carrousel_photos'>
              <SliderImage />
              </div>
            </div>
          
         </aside>
      </main>
    </article>
  )
}

export default App
