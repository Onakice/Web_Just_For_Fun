// ฟังก์ชันเพื่อแสดง/ซ่อน container แบบ toggle
function toggleContainers(showContainerId, hideContainerIds) {
    var showContainer = document.getElementById(showContainerId);
    var hideContainers = hideContainerIds.map(id => document.getElementById(id));
    var homeContainer = document.getElementById('homeContainer');

    // เช็คว่า container ที่จะแสดงอยู่ในสถานะ hidden หรือไม่
    if (showContainer.classList.contains('hidden')) {
        // แสดง container ที่ต้องการ และซ่อน container อื่นๆ
        showContainer.classList.remove('hidden');
        hideContainers.forEach(container => container.classList.add('hidden'));
    } else {
        // ถ้าหาก container ที่ต้องการแสดงอยู่แล้ว ก็ซ่อนมัน
        showContainer.classList.add('hidden');
        homeContainer.classList.remove('hidden');

    }
}

// เพิ่ม event listener ให้กับ showAddRoomForm
document.getElementById("showAddRoomForm").addEventListener("click", function() {
    toggleContainers('formContainer', ['homeContainer', 'multipleContainer']);
});

// เพิ่ม event listener ให้กับ showAddMultipleRoomForm
document.getElementById("showAddMultipleRoomForm").addEventListener("click", function() {
    toggleContainers('multipleContainer', ['homeContainer', 'formContainer']);
});


window.onload = function() {
    var homeContainer = document.getElementById("homeContainer");
    // ลบคลาส 'hidden' เพื่อให้ homeContainer แสดง
    homeContainer.classList.remove("hidden");
};