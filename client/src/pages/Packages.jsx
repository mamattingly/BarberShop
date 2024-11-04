import { packagesArr } from "../assets/packages";

function Packages() {
    return (
        <div>
            <h1>The Elegant Edge Packages</h1>
            {packagesArr.map((pkg, index) => (
                <div key={index} className="package">
                    <h2>{pkg.title}</h2>
                    {pkg.description && <p>{pkg.description}</p>}
                    {pkg.note && <p className="additional-note">{pkg.note}</p>}
                </div>
            ))}
        </div>
    );
}

export default Packages;
