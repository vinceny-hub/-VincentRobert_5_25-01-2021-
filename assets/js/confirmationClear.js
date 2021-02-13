function closeAll(){ 
    const closeTab = document.getElementById('closeTab')
    closeTab.addEventListener('click', async function() { 
    alert('Added ID to Storage')
    localStorage.clear(),
  
    location.href = "index.html"
      } 
      )}

      closeAll()