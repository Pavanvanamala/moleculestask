import React from 'react';

const MoleculeInformation = () => {
  return (
    <>
    <h1 className='text-danger'>Drug molecule visualization and analysis tool</h1><br/>
      <div className='card-container d-flex justify-content-between'>
        <div className="row">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h2 class="card-title text-primary">Molecular information</h2>
              <h4 class="card-subtitle mb-2 text-body-secondary">Molecule Name: protein structure of Ribonuclease</h4>
              <b class="card-text text-success">Properties:</b>
              <p><b>Binding affinity:</b><br/>
              <i>Substrate Binding:</i> Ribonucleases, including ribonuclease A (RNase A), exhibit a high binding affinity for RNA substrates. The active site of the enzyme interacts with the phosphate backbone of RNA, facilitating cleavage of phosphodiester bonds. <br/>
              <i> Metal Ion Binding: </i>Some ribonucleases require metal ions, such as zinc, for optimal activity. The binding of these ions can influence the overall structure and function of the enzyme.</p>
              <p><b>Solubility:</b>Native State Solubility: Ribonucleases are typically soluble in aqueous solutions in their native state. This solubility is crucial for their physiological function, as they need to be dissolved in cellular fluids to carry out their RNA-degrading activities.</p>
              <b>Model Type: pdb</b>
              <p>Query: 1BRS</p>
              <a href="https://3dmol.org/viewer.html?pdb=1BRS&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14" >Select Molecule</a>
            </div>
          </div><br/>

          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h2 class="card-title text-primary">Molecular information</h2>
              <h4 class="card-subtitle mb-2 text-body-secondary">Molecule Name: protein structure of Thymidylate kinase</h4>
              <b class="card-text text-success">Properties:</b>
              <p><b>Binding affinity:</b>Experimental methods like surface plasmon resonance (SPR), isothermal titration calorimetry (ITC), or fluorescence spectroscopy can be used to measure binding affinities.</p>
              <p><b>Solubility:</b>Experimental techniques such as dynamic light scattering (DLS) or analytical ultracentrifugation (AUC) can be used to assess solubility.</p>
              <b>Model Type: pdb</b>
              <p>Query: 1TDP</p>
              <a href="https://3dmol.org/viewer.html?pdb=1TDP&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14" >Select Molecule</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h2 class="card-title text-primary">Molecular information</h2>
              <h4 class="card-subtitle mb-2 text-body-secondary">Molecule Name: Ribonucleic Acid (RNA)</h4>
              <b class="card-text text-success">Properties:</b>
              <p><b>Binding affinity:</b></p>
              <i>RNA-RNA interactions</i><p>RNA molecules can form complex secondary and tertiary structures through base pairing interactions. The binding affinity between different regions of an RNA molecule or between different RNA molecules plays a role in maintaining the structural integrity and function of RNA.</p>
              <p><b>Solubility:</b><br/>
               <i>RNA Folding and Structure:</i> The solubility of RNA is influenced by its secondary and tertiary structures. Some RNA molecules may have regions with different solubility properties due to variations in their sequence and structure.
                <i>RNA in Cellular Environment:</i>RNA molecules need to remain soluble in the cellular environment to carry out their functions. Various cellular factors, including RNA-binding proteins and chaperones, help maintain the solubility of RNA.</p>
              <b>Model Type: pdb</b>
              <p>Query: 1RNA</p>
              <a href="https://3dmol.org/viewer.html?pdb=1RNA&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14" >Select Molecule</a>
            </div>
          </div>

          <div class="card" style={{ width: "24rem" }}>
            <div class="card-body">
              <h2 class="card-title text-primary">Molecular information</h2>
              <h4 class="card-subtitle mb-2 text-body-secondary">Molecule Name: Deoxyribonucleic Acid (DNA)</h4>
              <b class="card-text text-success">Properties:</b>
              <p><b>Binding affinity:</b><br/>
              <i> Base Pairing:</i> DNA is composed of nucleotide units, each containing one of four nitrogenous bases: adenine (A), thymine (T), cytosine (C), and guanine (G). The binding affinity in DNA is primarily due to hydrogen bonding between these bases. Adenine pairs with thymine (A-T), and cytosine pairs with guanine (C-G).</p>
              <p><b>Solubility:</b><br/>
             <i> Hydrophilic and Hydrophobic Regions:</i> DNA has a hydrophilic (water-attracting) sugar-phosphate backbone on the outside and hydrophobic (water-repelling) nitrogenous bases on the inside. This structural arrangement contributes to the overall solubility of DNA in water.<br/>
              <i>Salt Concentration Influence:</i> The solubility of DNA can be affected by salt concentration. Higher salt concentrations can shield the negative charges on the phosphate groups, reducing repulsion and promoting DNA solubility.</p>
              <b>Model Type: pdb</b>
              <p>Query: 1DNA</p>
              <a href="https://3dmol.org/viewer.html?pdb=1RNA&select=chain:A&style=stick:radius~0.1;cross&select=chain:A&surface=opacity:0.8;colorscheme:whiteCarbon&select=chain:B&style=cartoon;line&select=resi:19,23,26;chain:B&style=stick&select=resi:19,23,26;chain:B&labelres=backgroundOpacity:0.8;fontSize:14" >Select Molecule</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoleculeInformation;
