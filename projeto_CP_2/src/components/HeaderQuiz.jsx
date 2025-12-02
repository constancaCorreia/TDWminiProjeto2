import hat from "../assets/imgs_02/sortingHat.png"

export default function QuizHeader() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4 text-center text-md-start">
      <img 
        src={hat}
        alt="Sorting Hat" 
        width="130" 
        className="img-fluid" 
      />
      <h1 className="text-light fw-bold mb-0 fs-3 fs-md-2">
        Let's find your Hogwarts house!
      </h1>
    </div>
  );
}