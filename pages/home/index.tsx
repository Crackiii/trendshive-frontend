import React, { useEffect } from 'react'
import Body from '../../components/NewDesignHome/body/Body'
import NavBar from '../../components/NewDesignHome/NavBar'
import SideBar from '../../components/NewDesignHome/SideBar'
import { TwitterApi } from 'twitter-api-v2';

function Home() {



  return (
    <div>
      <NavBar />
      <div className='flex flex-row justify-start'>
        <SideBar />
        <Body />
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const client = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAOwEbQEAAAAAlFlKbSfkmtTF5pPEDWhP%2BvlsB2E%3DxyUctyegpq5cFSMOSrMbscMTftpkwzhSCsKtMny9npV3azMRun');
  
  // Tell typescript it's a readonly app
  const roClient = client.readOnly;
  roClient.v1.trendsByPlace(322).then(console.log)

  return {
    props: {}
  }

}


//API key - gTrCyJO7YjFByazh7jU6VzLU3
//API key secret - SgLV2vwGwVI1pmKXneTHktD0IqhYI6ZzzA6yASuWewgljnOp5d

//Access token - 1496792505274322945-vYJYcptuFuLCKZ0kdDrMP5gV34gcFa
//Access token secret - 8VAMGquwJkR77P2XKD0NhkJA0rdE0WhPmJX9AnM9cpkMI

//bearer - AAAAAAAAAAAAAAAAAAAAAOwEbQEAAAAAlFlKbSfkmtTF5pPEDWhP%2BvlsB2E%3DxyUctyegpq5cFSMOSrMbscMTftpkwzhSCsKtMny9npV3azMRun