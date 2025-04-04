import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Despre.css';

const Despre = () => {
    return (
        <section id="about" className="container-fluid py-5">
            <div className="container">
                {/* Titlu și Subtitlu */}
                <div className="text-center mb-5">
                    <h2 className="despreTitle">Despre Noi</h2>
                    <p className="lead">
                        La PAB Custom, suntem pasionați să oferim excelență în fiecare detaliu. Descoperiți povestea noastră și ce ne motivează.
                    </p>
                </div>

                {/* Conținut */}
                <div className="cardsRow row">
                    <div className="white col-md-6">
                        <h3 className="">Povestea Noastră</h3>
                        <p>
                            Fondată în 2010, PAB Custom a început ca un mic garaj cu un vis mare: să redefinească personalizarea auto. De-a lungul anilor, am crescut și am devenit un nume de încredere în industrie, cunoscut pentru soluțiile inovatoare și angajamentul față de calitate.
                        </p>
                        <p>
                            Călătoria noastră a fost alimentată de dragostea pentru mașini și dorința de a depăși limitele posibilului. Fiecare proiect pe care îl întreprindem este o mărturie a dedicării și expertizei noastre.
                        </p>
                    </div>
                    <div className="white col-md-6">
                        <h3>Misiunea Noastră</h3>
                        <p>
                            Misiunea noastră este simplă: să oferim clienților noștri servicii excepționale și rezultate care depășesc așteptările. Credem în construirea unor relații de durată prin transparență, integritate și o căutare neobosită a perfecțiunii.
                        </p>
                        <p>
                            Fie că este vorba de tuning, detailing sau modificări personalizate, abordăm fiecare sarcină cu aceeași pasiune și precizie.
                        </p>
                    </div>
                </div>

                {/* Secțiunea Echipă */}
                <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <h3 className="teamTitle">Faceți Cunostiință cu Echipa Noastră</h3>
                        <p className="lead">
                            În spatele fiecărui proiect stă o echipă de profesioniști dedicați. Cunoașteți oamenii care fac totul posibil.
                        </p>
                    </div>
                </div>

                {/* Membrii Echipei */}
                <div className="teamSection row mt-4">
                    <div className="col-md-4 text-center mb-4">
                        <img src="/staff/staff.jpg" className="staffPic img mb-3" alt="Membru Echipă 1" />
                        <h4>John Doe</h4>
                        <p>Specialist în Tuning</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img src="/staff/staff.jpg" className="staffPic img mb-3" alt="Membru Echipă 2" />
                        <h4>Jane Smith</h4>
                        <p>Expert în Detailing</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img src="/staff/staff.jpg" className="staffPic img mb-3" alt="Membru Echipă 3" />
                        <h4>Mike Johnson</h4>
                        <p>Inginer Mecanic</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Despre;