import { contractAdress, contractABI } from './../utils/constants';
import { ethers } from 'ethers';
import { Contract } from 'ethers/lib/ethers';
import { useEffect } from 'react';

const Output = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAdress, contractABI, signer);
  const func = async () => {
    await provider.send("eth_requestAccounts", []);
  }
  func();

  await contract.setValue(25);
  const valeur = await contract.getValue();
  console.log(valeur)
  return (
    <div className="flex place-items-center">
      <h1 className="p-4"> Output :</h1>

      <output type="number" defaultValue="100" className="cursor-text">
      </output>
    </div>
  );
};

export default Output;
