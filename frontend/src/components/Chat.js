import React from 'react'

const Chat = () => {
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1f2cf66df7575c11e9a286ce3d08cfab4","popupWidget":false,"automaticChatOpenOnNavigation":false};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  return (
    <div></div>
  )
}

export default Chat