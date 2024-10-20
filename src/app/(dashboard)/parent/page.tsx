import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";


const ParentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md">
          <div className="flex  gap-1 ">
            <h1 className="flex flex-col text-xl font-semibold after:content-['Breno_Rodrigues']  after:font-light  after:text-sm after:text-purple-500">Schedule</h1>
            
          </div>

          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
