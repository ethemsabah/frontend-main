import React,{useState,useEffect} from "react";
import Header from "./Header";
import VenueDataService from "../services/VenueDataService";
import { useParams } from "react-router-dom";

function AddUpdateVenue() {

  const{id}=useParams();

  const [venue, setVenue] = useState({
    id: id,
    name: "",
    address: "",
    rating: 0,
    foodanddrink: [],
    distance: 0,
    coordinates: [],
    hours: [],
  });

 
  const [addOrUpdate, setAddOrUpdate] = useState("add");

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenue({ ...venue, [name]: value });
  };

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        
        const response = await VenueDataService.getVenue(id);
        
        setVenue(response.data);
        
       
      } catch (error) {
        console.error("Mekan getirme hatası:", error);
      }
    };

   
    if (id) {
      setAddOrUpdate("update");
      fetchVenue();
    }
  }, [id]);

    return (
      <div>
        <Header headerText={addOrUpdate==="add" ? "Yeni Mekan Ekle":"Mekanı Güncelle"} motto=""/>

        <div className="row">
          <form action="" className="form-horizontal">
             
             {/*Mekan Adı */}
             <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Mekan Adı:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={venue.name}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/*Mekan Adresi */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Mekan Adresi:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={venue.address}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* İmkanlar */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                İmkanlar:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={venue.foodanddrink}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Enlem */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Enlem:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="enlem"
                  value={venue.coordinates}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Boylam */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Boylam:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="boylam"
                  value={venue.coordinates}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Günler 1 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Günler-1:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="gunler1"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Açılış 1 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Açılış-1:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="acilis1"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Kapanış 1 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Kapanış-1:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="kapanis1"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Kapalı 1 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Kapalı-1:
              </label>
              <div className="btn">
                <input type="checkbox" name="kapali1" id="kapali1" />
              </div>
            </div>

            {/* Günler 2 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Günler-2:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="gunler2"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Açılış 2 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Açılış-2:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="acilis2"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Kapanış 2 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Kapanış-2:
              </label>
              <div className="col-xs-12 col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="kapanis2"
                  value={venue.hours}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>
            </div>

            {/* Kapalı 2 */}
            <div className="form-group">
              <label className="col-xs-10 col-sm-2 control-label">
                Kapalı-2:
              </label>
              <div className="btn">
                <input type="checkbox" name="kapali2" id="kapali2" />
              </div>
            </div>

            <button type="submit" className="btn btn-default pull-right">
              {addOrUpdate === "add" ? "Mekanı Ekle" : "Mekanı Güncelle"}
            </button>

          </form>
        </div>

      </div>
    );
  }
  
  export default AddUpdateVenue;
  