import ReactPlayer from 'react-player'

export const Cohort = () => {
    return (
  <>
<div className="mt-20 ml-60">
  <p className="text-7xl font-md mb-5">Cohorts</p>
  <p className="text-3xl font-md mt-5">Live Training Classes</p>
</div>
<div className="grid grid-cols-3 gap-30 ml-0">
    <div className="col-span-1 ">
        <ReactPlayer width={400} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
    </div>
    <div className="col-span-1">
        <ReactPlayer width={400} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
    </div>
    <div className="col-span-1">
        <ReactPlayer width={400} height={300} controls={true} playing={true} light={true} url='https://youtu.be/RDagRV7ueMI?si=uckG58qqU_Y5BxMT' />
    </div>

</div>
   </>
    )
}