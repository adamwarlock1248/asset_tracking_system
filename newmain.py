# from re import S
import winreg
import platform, psutil as p, wmi
import json
from pymongo import MongoClient

def foo(hive, flag):
    aReg = winreg.ConnectRegistry(None, hive)
    aKey = winreg.OpenKey(aReg, r"SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall",
                          0, winreg.KEY_READ | flag)

    count_subkey = winreg.QueryInfoKey(aKey)[0]

    software_list = []

    for i in range(count_subkey):
        software = {}
        try:
            asubkey_name = winreg.EnumKey(aKey, i)
            asubkey = winreg.OpenKey(aKey, asubkey_name)
            software['name'] = winreg.QueryValueEx(asubkey, "DisplayName")[0]
            software_list.append(software)
        except EnvironmentError:
            continue

    return software_list

software_list = foo(winreg.HKEY_LOCAL_MACHINE, winreg.KEY_WOW64_32KEY) + foo(winreg.HKEY_LOCAL_MACHINE, winreg.KEY_WOW64_64KEY) + foo(winreg.HKEY_CURRENT_USER, 0)

def softinfo(software_list):
    result = []
    for software in software_list:
        sofinfo = software['name']

        res_sofinfo = str(sofinfo)
        result.append(res_sofinfo)
    return result







def size(byte):
    # this the function to convert bytes into more suitable reading format.

    # Suffixes for the size
    for x in ["B", "KB", "MB", "GB", "TB"]:
        if byte < 1024:
            return f"{byte:.2f}{x}"
        byte = byte / 1024


# Function to get info about Disk Usage.
def disk():
    par = p.disk_partitions()
    # getting all of the disk partitions
    result = []
    for x in par:
        var_1 = f"Drive: {x.device}"
        var_2 = f"File System Type: {x.fstype}"

        dsk = p.disk_usage(x.mountpoint)
        varr3 =  f"Total Size: {size(dsk.total)}"
        varr4 =  f"Used: {size(dsk.used)}"
        varr5 =  f"Free: {size(dsk.free)}"
        varr6 =  f"Percentage: {dsk.percent}%"
        var_result = str(var_1), str(var_2), str(varr3), str(varr4), str(varr5), str(varr6)
        result.append(var_result)
    return result





def memory():
    # Getting the Memory/Ram Data.
    mem = p.virtual_memory()
    total_memory = f"Total Memory: {size(mem.total)}"
    used_memeory = f"Used Memory: {size(mem.used)}"
    available_memeory = f"Available Memory: {size(mem.available)}"
    memeory_percentage = f"Percentage: {str(mem.percent)}%"
    return [total_memory,used_memeory,available_memeory,memeory_percentage]









a = wmi.WMI()
my_system = a.Win32_ComputerSystem()[0]

print("\n\n")
os_name = platform.uname().system
version_detail = platform.uname().version
computer_name = platform.uname().node
release_detail = platform.uname().release
processor_detail = platform.uname().processor
system_family = my_system.SystemFamily
model_detail = my_system.Model
no_of_processor = my_system.NumberOfProcessors
installed_softwares_info = str(softinfo(software_list))
disk_information = str(disk())
memory_information = str(memory())



id = input("Enter Your Unique ID assigned to your System: ")



dict1 = {
    "_id": id,
    "System": os_name,
    "Version": version_detail,
    "Device_Name": computer_name,
    "Release_Details": release_detail,
    "Processor": processor_detail,
    "System_Detail": system_family,
    "Model": model_detail,
    "Number_of_Processors": no_of_processor,
    "Software_Installed": installed_softwares_info,
    "Storage_Information": disk_information,
    "Memory_Details": memory_information


}
# print(dict1)

# the json file where the output must be stored
out_file = open("device_information.json", "w")

json.dump(dict1, out_file, indent=6)

out_file.close()



# DataInsert and/or Updated in MongoDb

myclient = MongoClient("mongodb+srv://root:sqltejas@cluster1.64r18.mongodb.net/test")

# database
db = myclient["Computer_Status"]

# Created or Switched to collection
# names: GeeksForGeeks
Collection = db["stats"]

Collection_2 = db["ids"]

# Loading or Opening the json file
with open('device_information.json') as file:
	file_data = json.load(file)



# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else inser_one is used

sysid = {"_id":id};

try:
	Collection.insert_one(file_data)
except:
	Collection.update(sysid,file_data)


try:
    Collection_2.insert_one(sysid)
except:
    Collection_2.update(sysid)
    

print("\n\nData inserted successfully...")




