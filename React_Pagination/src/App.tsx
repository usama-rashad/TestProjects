import "./App.scss";
import CarsComponent, { CarData, CarProps } from "./Components/Items/CarsComponent/CarsComponent";
import PhonesComponent, { PhoneData } from "./Components/Items/PhonesComponent/PhonesComponent";
import Paginate from "./Components/Paginate/Paginate";

const carsData: CarData[] = [
  { make: "Mercedes", model: 2020, mileage: 1000 },
  { make: "Bugatti", model: 2020, mileage: 650 },
  { make: "Ferrari", model: 2021, mileage: 22000 },
];
const phoneData: PhoneData[] = [
  { make: "Samsung", model: "Galaxy S21", color: "red", screenSize: "6" },
  { make: "Sony", model: "Xperia Z", color: "black", screenSize: "5.5" },
  { make: "Oppo", model: "Reno 10", color: "aqua", screenSize: "6.6" },
  { make: "Asus", model: "Zenphone 6", color: "metallic blue", screenSize: "6.7" },
];

function App() {
  return (
    <div className="mainApp">
      <h3>Paginate</h3>
      <Paginate<CarProps> dataSource={carsData} rowRenderItem={CarsComponent} />
    </div>
  );
}

export default App;
