import { IoSearch } from "react-icons/io5";
import Banner from "../../Header/Banner/Banner";

const Home = () => {
      return (
            <div className="pt-36">
                  <Banner />
                  <div style={styles.content}>
        {[...Array(50)].map((_, index) => (
          <p key={index}>Scroll down to see the effect...</p>
        ))}
      </div>
            </div>
      );
};


const styles = {
     
      content: {
        padding: '20px',
        marginTop: '100px'
      }
    };



export default Home;


