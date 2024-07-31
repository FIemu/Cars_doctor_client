import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
  return (
    <div className="hero  my-4">
      <div className="hero-content flex-col lg:flex-row">
        <div className='w-1/2 relative'>
        <img
          src={person}
          className=" rounded-lg shadow-2xl w-3/4"
        />
        <img
          src={parts}
          className="max-w-sm rounded-lg shadow-2xl w-1/2 absolute right-8 top-1/2 border-8"
        />
        </div>
        <div className='w-1/2'>
          <h3 className="text-2xl text-red-500 font-bold mb-2">About US</h3>
          <h1 className="text-5xl font-bold mb-6">We are qualified & of experience in this field</h1>
          <p className="text-xl mb-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="text-xl">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <button className="btn bg-red-500 text-white hover:text-black font-bold">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
