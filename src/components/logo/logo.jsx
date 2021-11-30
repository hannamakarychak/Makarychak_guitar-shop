import './logo.scss';

const Logo = ({ isInverted }) => {
  return isInverted ? (
    <svg width="67" height="70" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.473 15.586H9.008V9.102h-1.7c-.69 0-1.288.058-1.796.175-.508.118-.931.32-1.27.606-.325.273-.566.65-.722 1.133-.157.481-.235 1.087-.235 1.816v18.281c0 .43.072.827.215 1.192.143.351.339.664.586.937.247.26.54.469.879.625.351.143.736.215 1.152.215.443 0 .84-.078 1.192-.234a2.78 2.78 0 0 0 .898-.625c.26-.274.456-.586.586-.938.143-.364.215-.755.215-1.172v-8.945h-2.48v-1.309h3.945v10.274a4.14 4.14 0 0 1-.352 1.719 4.06 4.06 0 0 1-.918 1.347 4.13 4.13 0 0 1-1.387.88 4.48 4.48 0 0 1-1.68.312c-.624 0-1.204-.111-1.738-.332a4.453 4.453 0 0 1-1.367-.899 4.214 4.214 0 0 1-.898-1.347 4.48 4.48 0 0 1-.313-1.68V13.477c0-.43.007-.873.02-1.329.026-.455.084-.891.176-1.308.09-.417.24-.807.449-1.172.208-.378.495-.703.86-.977.377-.286.852-.507 1.425-.664.586-.156 1.302-.234 2.148-.234h3.575v7.793Zm13.336-.469v16.328c0 .573-.072 1.1-.215 1.582a3.559 3.559 0 0 1-.645 1.25 2.924 2.924 0 0 1-1.074.82c-.417.196-.905.294-1.465.294s-1.055-.091-1.484-.274a2.877 2.877 0 0 1-1.055-.722 3.425 3.425 0 0 1-.625-1.133 4.673 4.673 0 0 1-.215-1.446V15.117h1.465v16.817c0 .599.163 1.106.488 1.523.339.417.82.625 1.446.625.612 0 1.08-.234 1.406-.703.338-.482.508-1.061.508-1.738V15.117h1.465ZM30.64 35V15.117h1.465V35H30.64Zm-.196-26.621c0-.651.313-.977.938-.977.3 0 .534.085.703.254.182.157.273.397.273.723a.916.916 0 0 1-.254.644c-.156.183-.397.274-.722.274-.3 0-.534-.091-.703-.274a.959.959 0 0 1-.235-.644Zm8.903 8.047h-1.621v-1.309h1.62v-2.46h1.465v2.46h2.676v1.309h-2.675v15.508c0 .599.162 1.106.488 1.523.325.404.8.605 1.426.605h.644v1.329h-.644c-.56 0-1.055-.091-1.485-.274a3.09 3.09 0 0 1-1.054-.742 3.425 3.425 0 0 1-.626-1.133 4.606 4.606 0 0 1-.214-1.426v-15.39ZM52.137 33.69c.625 0 1.1-.208 1.425-.625.339-.416.508-.924.508-1.523v-6.895h-1.933c-.612 0-1.087.202-1.426.606-.326.404-.488.911-.488 1.523v6.914h1.914ZM48.757 35v-8.086c0-.52.072-.996.216-1.426a3.03 3.03 0 0 1 .644-1.133 2.771 2.771 0 0 1 1.055-.742 3.72 3.72 0 0 1 1.465-.273h1.933v-5.176c0-.599-.169-1.1-.508-1.504-.325-.416-.8-.625-1.425-.625-.612 0-1.087.235-1.426.703-.326.469-.488 1.042-.488 1.719l-1.446.215c0-.56.072-1.08.215-1.563.143-.481.352-.898.625-1.25a2.964 2.964 0 0 1 1.055-.82c.43-.208.918-.312 1.465-.312.56 0 1.048.09 1.465.273.43.182.787.436 1.074.762.286.312.501.69.644 1.133.144.43.215.898.215 1.406v13.125c0 .52-.071 1.002-.215 1.445a3.25 3.25 0 0 1-.644 1.133c-.287.312-.645.56-1.074.742-.417.17-.905.254-1.465.254h-3.38Zm17.438-18.691a2.757 2.757 0 0 0-.703-.079c-.625 0-1.107.209-1.445.625-.326.417-.488.925-.488 1.524V35h-1.465V18.496c0-.52.071-.996.215-1.426.143-.442.358-.82.644-1.133a2.773 2.773 0 0 1 1.055-.742c.43-.182.924-.273 1.484-.273.235 0 .462.02.684.058.221.027.423.072.605.137l-.586 1.192ZM23.17 53.464c.287-.457.545-.923.774-1.397.228-.482.419-.952.571-1.409a6.274 6.274 0 0 1-.52-.876 2.29 2.29 0 0 1-.204-.94c0-.312.03-.596.09-.85.058-.254.139-.47.24-.647a1.28 1.28 0 0 1 .343-.407.624.624 0 0 1 .394-.152c.186 0 .334.093.444.28.119.186.17.423.152.71a7.71 7.71 0 0 1-.14 1.092 8.24 8.24 0 0 1-.304 1.194c.17.194.343.389.52.584.187.186.352.38.496.584.152.203.275.423.368.66.102.228.152.478.152.749 0 .372-.072.715-.215 1.028-.136.313-.301.584-.496.813a2.508 2.508 0 0 1-.609.533c-.212.127-.394.19-.546.19-.262 0-.465-.068-.61-.203a.619.619 0 0 1-.202-.444c0-.127.02-.254.063-.381.042-.127.089-.241.14-.343.059-.11.114-.199.165-.267.059-.067.101-.101.127-.101.042 0 .067.017.076.05.017.026.025.051.025.077 0 .042-.004.101-.012.178-.009.076-.013.14-.013.19 0 .144.046.262.14.355.101.094.262.14.482.14a.958.958 0 0 0 .317-.063 1.11 1.11 0 0 0 .61-.546 1.07 1.07 0 0 0 .114-.508c0-.178-.042-.364-.127-.559a3.85 3.85 0 0 0-.33-.596 8.908 8.908 0 0 0-.457-.622c-.16-.212-.322-.428-.482-.648-.195.483-.411.952-.648 1.41-.229.448-.474.863-.736 1.243l-.153-.101Zm.964-5.281c0 .321.06.609.178.863.118.245.275.487.47.724a5.24 5.24 0 0 0 .14-.75c.025-.245.037-.478.037-.698 0-.592-.13-.888-.393-.888-.076 0-.17.059-.28.177-.101.11-.152.3-.152.572Zm6.498 4.887c0-.22.012-.575.038-1.066.025-.5.055-1.13.089-1.892a139.99 139.99 0 0 0 .114-7.858 80.834 80.834 0 0 0-.038-2.603v-.457a.56.56 0 0 1 .025-.177.365.365 0 0 1 .14-.14c.05-.025.11-.06.177-.102a.41.41 0 0 1 .23-.076c.092 0 .164.026.215.076.05.043.089.123.114.242.034.11.06.304.076.584.017.27.026.651.026 1.142.008.483.012 1.109.012 1.88 0 .71-.017 1.446-.05 2.208-.034.762-.077 1.51-.127 2.247a71.297 71.297 0 0 1-.153 2.12 99.5 99.5 0 0 1-.152 1.828c-.042.542-.08.995-.114 1.359-.034.355-.051.584-.051.685v.153c0 .059.004.118.013.177.008.051.02.098.038.14.017.034.042.05.076.05.085 0 .173-.135.267-.405.093-.271.211-.635.355-1.092.093-.288.199-.58.317-.876.119-.296.242-.563.369-.8.135-.245.27-.444.406-.597.144-.152.283-.228.419-.228.101 0 .186.03.254.089.076.059.14.135.19.228.05.085.089.178.114.28.026.101.047.198.064.291a37.947 37.947 0 0 1 .089 1.155c.017.263.034.538.05.826.026.288.051.563.077.825.042.474.156.817.342 1.029a.92.92 0 0 0 .724.317 1.2 1.2 0 0 0 .28-.026.788.788 0 0 1 .19-.025c.042 0 .05.042.025.127-.017.034-.089.093-.216.178-.127.076-.35.114-.673.114-.27 0-.499-.042-.685-.127a1.08 1.08 0 0 1-.432-.419 2.782 2.782 0 0 1-.241-.749 9.406 9.406 0 0 1-.102-1.117l-.05-.762a6.128 6.128 0 0 0-.064-.736 2.317 2.317 0 0 0-.114-.533c-.05-.144-.123-.216-.216-.216-.076 0-.16.089-.254.266a5.29 5.29 0 0 0-.28.61c-.084.228-.164.461-.24.698l-.178.533c-.034.102-.085.271-.152.508a9.073 9.073 0 0 1-.242.724 4.207 4.207 0 0 1-.304.647c-.11.186-.224.28-.343.28-.102 0-.182-.056-.241-.166a1.736 1.736 0 0 1-.14-.419 5.168 5.168 0 0 1-.05-.507 9.724 9.724 0 0 1-.013-.445Zm10.191 1.13c.204 0 .402-.042.597-.127a1.66 1.66 0 0 0 .52-.393c.153-.178.272-.394.356-.648.093-.254.14-.55.14-.888 0-.28-.034-.542-.102-.788a1.976 1.976 0 0 0-.305-.66 1.363 1.363 0 0 0-.507-.444 1.497 1.497 0 0 0-.724-.165c-.195 0-.39.038-.584.114a1.3 1.3 0 0 0-.52.343 1.665 1.665 0 0 0-.369.597c-.093.237-.14.524-.14.863 0 .27.035.537.102.8.068.254.165.486.292.698.136.212.305.38.508.508.212.127.457.19.736.19Zm-.444.648c-.558 0-1.015-.182-1.371-.546-.355-.373-.533-.91-.533-1.612 0-.474.089-.91.266-1.308a3.48 3.48 0 0 1 .686-1.041 3.2 3.2 0 0 1 .952-.686c.347-.16.686-.24 1.016-.24.533 0 .96.181 1.282.545.322.364.482.901.482 1.612 0 .474-.084.91-.253 1.308-.161.398-.377.745-.648 1.04a3.13 3.13 0 0 1-.889.686c-.33.161-.66.242-.99.242Zm7.615-7.516c.042 0 .055.085.038.254-.009.16-.03.372-.064.635-.025.254-.055.537-.089.85-.033.313-.05.618-.05.914 0 .601.004 1.164.012 1.689.017.525.038 1.037.064 1.536.28-.465.563-.889.85-1.27.297-.38.593-.706.89-.977.295-.27.592-.478.888-.622.296-.153.592-.229.889-.229.236 0 .435.068.596.203.161.127.241.356.241.686 0 .237-.05.478-.152.724a3.605 3.605 0 0 1-.393.723c-.161.237-.347.47-.56.699-.202.228-.41.444-.621.647-.508.474-1.08.935-1.714 1.384l-.127-.153c.5-.431.948-.854 1.346-1.27.169-.177.334-.359.495-.545.16-.195.304-.385.431-.571.127-.195.229-.377.305-.546a1.16 1.16 0 0 0 .127-.495c0-.051-.008-.119-.025-.203a.525.525 0 0 0-.09-.242.538.538 0 0 0-.228-.203.705.705 0 0 0-.38-.089c-.195 0-.403.068-.623.204-.22.135-.448.33-.685.583-.229.246-.466.55-.711.914-.237.356-.474.754-.711 1.194.034.61.072 1.197.114 1.764.042.568.08 1.13.114 1.689.043.567.072 1.143.09 1.726.025.584.037 1.198.037 1.841 0 1.49-.084 2.793-.254 3.91-.16 1.118-.372 2.049-.634 2.793-.254.754-.542 1.317-.863 1.689-.33.38-.656.571-.978.571-.186 0-.368-.076-.546-.228-.186-.153-.347-.377-.482-.673a4.268 4.268 0 0 1-.343-1.066 6.839 6.839 0 0 1-.14-1.46c0-.805.076-1.697.229-2.68a28.07 28.07 0 0 1 .647-3.02c.271-1.025.593-2.049.965-3.073a30.81 30.81 0 0 1 1.206-2.856v-1.27c0-.999.038-1.875.114-2.628.085-.762.178-1.396.28-1.904.101-.516.198-.901.292-1.155.101-.263.169-.394.203-.394Zm-.597 13.965c0-.745-.013-1.371-.038-1.879-.017-.5-.042-.956-.076-1.371a58.721 58.721 0 0 0-.09-1.219 46.35 46.35 0 0 1-.063-1.434 27.48 27.48 0 0 0-.9 2.336c-.28.837-.526 1.7-.737 2.59-.22.888-.39 1.785-.508 2.69-.127.906-.19 1.79-.19 2.654 0 .33.017.698.05 1.105.034.406.098.787.19 1.142.085.356.2.652.344.889.135.245.313.368.533.368.169 0 .326-.106.47-.317.143-.212.27-.504.38-.876a9.9 9.9 0 0 0 .28-1.32c.084-.5.152-1.042.203-1.626.05-.584.089-1.193.114-1.828.025-.635.038-1.27.038-1.904Z"
        fill="#FFFFFF"
      />
      <path stroke="#FFFFFF" strokeWidth=".4" d="M1 38.8h66M13 42.8h54M53 46.8h14M57 50.8h10" />
    </svg>
  ) : (
    <svg width="67" height="70" fill="#000000" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.473 15.586H9.008V9.102h-1.7c-.69 0-1.288.058-1.796.175-.508.118-.931.32-1.27.606-.325.273-.566.65-.722 1.133-.157.481-.235 1.087-.235 1.816v18.281c0 .43.072.827.215 1.192.143.351.339.664.586.937.247.26.54.469.879.625.351.143.736.215 1.152.215.443 0 .84-.078 1.192-.234a2.78 2.78 0 0 0 .898-.625c.26-.274.456-.586.586-.938.143-.364.215-.755.215-1.172v-8.945h-2.48v-1.309h3.945v10.274a4.14 4.14 0 0 1-.352 1.719 4.06 4.06 0 0 1-.918 1.347 4.13 4.13 0 0 1-1.387.88 4.48 4.48 0 0 1-1.68.312c-.624 0-1.204-.111-1.738-.332a4.453 4.453 0 0 1-1.367-.899 4.214 4.214 0 0 1-.898-1.347 4.48 4.48 0 0 1-.313-1.68V13.477c0-.43.007-.873.02-1.329.026-.455.084-.891.176-1.308.09-.417.24-.807.449-1.172.208-.378.495-.703.86-.977.377-.286.852-.507 1.425-.664.586-.156 1.302-.234 2.148-.234h3.575v7.793Zm13.336-.469v16.328c0 .573-.072 1.1-.215 1.582a3.559 3.559 0 0 1-.645 1.25 2.924 2.924 0 0 1-1.074.82c-.417.196-.905.294-1.465.294s-1.055-.091-1.484-.274a2.877 2.877 0 0 1-1.055-.722 3.425 3.425 0 0 1-.625-1.133 4.673 4.673 0 0 1-.215-1.446V15.117h1.465v16.817c0 .599.163 1.106.488 1.523.339.417.82.625 1.446.625.612 0 1.08-.234 1.406-.703.338-.482.508-1.061.508-1.738V15.117h1.465ZM30.64 35V15.117h1.465V35H30.64Zm-.196-26.621c0-.651.313-.977.938-.977.3 0 .534.085.703.254.182.157.273.397.273.723a.916.916 0 0 1-.254.644c-.156.183-.397.274-.722.274-.3 0-.534-.091-.703-.274a.959.959 0 0 1-.235-.644Zm8.903 8.047h-1.621v-1.309h1.62v-2.46h1.465v2.46h2.676v1.309h-2.675v15.508c0 .599.162 1.106.488 1.523.325.404.8.605 1.426.605h.644v1.329h-.644c-.56 0-1.055-.091-1.485-.274a3.09 3.09 0 0 1-1.054-.742 3.425 3.425 0 0 1-.626-1.133 4.606 4.606 0 0 1-.214-1.426v-15.39ZM52.137 33.69c.625 0 1.1-.208 1.425-.625.339-.416.508-.924.508-1.523v-6.895h-1.933c-.612 0-1.087.202-1.426.606-.326.404-.488.911-.488 1.523v6.914h1.914ZM48.757 35v-8.086c0-.52.072-.996.216-1.426a3.03 3.03 0 0 1 .644-1.133 2.771 2.771 0 0 1 1.055-.742 3.72 3.72 0 0 1 1.465-.273h1.933v-5.176c0-.599-.169-1.1-.508-1.504-.325-.416-.8-.625-1.425-.625-.612 0-1.087.235-1.426.703-.326.469-.488 1.042-.488 1.719l-1.446.215c0-.56.072-1.08.215-1.563.143-.481.352-.898.625-1.25a2.964 2.964 0 0 1 1.055-.82c.43-.208.918-.312 1.465-.312.56 0 1.048.09 1.465.273.43.182.787.436 1.074.762.286.312.501.69.644 1.133.144.43.215.898.215 1.406v13.125c0 .52-.071 1.002-.215 1.445a3.25 3.25 0 0 1-.644 1.133c-.287.312-.645.56-1.074.742-.417.17-.905.254-1.465.254h-3.38Zm17.438-18.691a2.757 2.757 0 0 0-.703-.079c-.625 0-1.107.209-1.445.625-.326.417-.488.925-.488 1.524V35h-1.465V18.496c0-.52.071-.996.215-1.426.143-.442.358-.82.644-1.133a2.773 2.773 0 0 1 1.055-.742c.43-.182.924-.273 1.484-.273.235 0 .462.02.684.058.221.027.423.072.605.137l-.586 1.192ZM23.17 53.464c.287-.457.545-.923.774-1.397.228-.482.419-.952.571-1.409a6.274 6.274 0 0 1-.52-.876 2.29 2.29 0 0 1-.204-.94c0-.312.03-.596.09-.85.058-.254.139-.47.24-.647a1.28 1.28 0 0 1 .343-.407.624.624 0 0 1 .394-.152c.186 0 .334.093.444.28.119.186.17.423.152.71a7.71 7.71 0 0 1-.14 1.092 8.24 8.24 0 0 1-.304 1.194c.17.194.343.389.52.584.187.186.352.38.496.584.152.203.275.423.368.66.102.228.152.478.152.749 0 .372-.072.715-.215 1.028-.136.313-.301.584-.496.813a2.508 2.508 0 0 1-.609.533c-.212.127-.394.19-.546.19-.262 0-.465-.068-.61-.203a.619.619 0 0 1-.202-.444c0-.127.02-.254.063-.381.042-.127.089-.241.14-.343.059-.11.114-.199.165-.267.059-.067.101-.101.127-.101.042 0 .067.017.076.05.017.026.025.051.025.077 0 .042-.004.101-.012.178-.009.076-.013.14-.013.19 0 .144.046.262.14.355.101.094.262.14.482.14a.958.958 0 0 0 .317-.063 1.11 1.11 0 0 0 .61-.546 1.07 1.07 0 0 0 .114-.508c0-.178-.042-.364-.127-.559a3.85 3.85 0 0 0-.33-.596 8.908 8.908 0 0 0-.457-.622c-.16-.212-.322-.428-.482-.648-.195.483-.411.952-.648 1.41-.229.448-.474.863-.736 1.243l-.153-.101Zm.964-5.281c0 .321.06.609.178.863.118.245.275.487.47.724a5.24 5.24 0 0 0 .14-.75c.025-.245.037-.478.037-.698 0-.592-.13-.888-.393-.888-.076 0-.17.059-.28.177-.101.11-.152.3-.152.572Zm6.498 4.887c0-.22.012-.575.038-1.066.025-.5.055-1.13.089-1.892a139.99 139.99 0 0 0 .114-7.858 80.834 80.834 0 0 0-.038-2.603v-.457a.56.56 0 0 1 .025-.177.365.365 0 0 1 .14-.14c.05-.025.11-.06.177-.102a.41.41 0 0 1 .23-.076c.092 0 .164.026.215.076.05.043.089.123.114.242.034.11.06.304.076.584.017.27.026.651.026 1.142.008.483.012 1.109.012 1.88 0 .71-.017 1.446-.05 2.208-.034.762-.077 1.51-.127 2.247a71.297 71.297 0 0 1-.153 2.12 99.5 99.5 0 0 1-.152 1.828c-.042.542-.08.995-.114 1.359-.034.355-.051.584-.051.685v.153c0 .059.004.118.013.177.008.051.02.098.038.14.017.034.042.05.076.05.085 0 .173-.135.267-.405.093-.271.211-.635.355-1.092.093-.288.199-.58.317-.876.119-.296.242-.563.369-.8.135-.245.27-.444.406-.597.144-.152.283-.228.419-.228.101 0 .186.03.254.089.076.059.14.135.19.228.05.085.089.178.114.28.026.101.047.198.064.291a37.947 37.947 0 0 1 .089 1.155c.017.263.034.538.05.826.026.288.051.563.077.825.042.474.156.817.342 1.029a.92.92 0 0 0 .724.317 1.2 1.2 0 0 0 .28-.026.788.788 0 0 1 .19-.025c.042 0 .05.042.025.127-.017.034-.089.093-.216.178-.127.076-.35.114-.673.114-.27 0-.499-.042-.685-.127a1.08 1.08 0 0 1-.432-.419 2.782 2.782 0 0 1-.241-.749 9.406 9.406 0 0 1-.102-1.117l-.05-.762a6.128 6.128 0 0 0-.064-.736 2.317 2.317 0 0 0-.114-.533c-.05-.144-.123-.216-.216-.216-.076 0-.16.089-.254.266a5.29 5.29 0 0 0-.28.61c-.084.228-.164.461-.24.698l-.178.533c-.034.102-.085.271-.152.508a9.073 9.073 0 0 1-.242.724 4.207 4.207 0 0 1-.304.647c-.11.186-.224.28-.343.28-.102 0-.182-.056-.241-.166a1.736 1.736 0 0 1-.14-.419 5.168 5.168 0 0 1-.05-.507 9.724 9.724 0 0 1-.013-.445Zm10.191 1.13c.204 0 .402-.042.597-.127a1.66 1.66 0 0 0 .52-.393c.153-.178.272-.394.356-.648.093-.254.14-.55.14-.888 0-.28-.034-.542-.102-.788a1.976 1.976 0 0 0-.305-.66 1.363 1.363 0 0 0-.507-.444 1.497 1.497 0 0 0-.724-.165c-.195 0-.39.038-.584.114a1.3 1.3 0 0 0-.52.343 1.665 1.665 0 0 0-.369.597c-.093.237-.14.524-.14.863 0 .27.035.537.102.8.068.254.165.486.292.698.136.212.305.38.508.508.212.127.457.19.736.19Zm-.444.648c-.558 0-1.015-.182-1.371-.546-.355-.373-.533-.91-.533-1.612 0-.474.089-.91.266-1.308a3.48 3.48 0 0 1 .686-1.041 3.2 3.2 0 0 1 .952-.686c.347-.16.686-.24 1.016-.24.533 0 .96.181 1.282.545.322.364.482.901.482 1.612 0 .474-.084.91-.253 1.308-.161.398-.377.745-.648 1.04a3.13 3.13 0 0 1-.889.686c-.33.161-.66.242-.99.242Zm7.615-7.516c.042 0 .055.085.038.254-.009.16-.03.372-.064.635-.025.254-.055.537-.089.85-.033.313-.05.618-.05.914 0 .601.004 1.164.012 1.689.017.525.038 1.037.064 1.536.28-.465.563-.889.85-1.27.297-.38.593-.706.89-.977.295-.27.592-.478.888-.622.296-.153.592-.229.889-.229.236 0 .435.068.596.203.161.127.241.356.241.686 0 .237-.05.478-.152.724a3.605 3.605 0 0 1-.393.723c-.161.237-.347.47-.56.699-.202.228-.41.444-.621.647-.508.474-1.08.935-1.714 1.384l-.127-.153c.5-.431.948-.854 1.346-1.27.169-.177.334-.359.495-.545.16-.195.304-.385.431-.571.127-.195.229-.377.305-.546a1.16 1.16 0 0 0 .127-.495c0-.051-.008-.119-.025-.203a.525.525 0 0 0-.09-.242.538.538 0 0 0-.228-.203.705.705 0 0 0-.38-.089c-.195 0-.403.068-.623.204-.22.135-.448.33-.685.583-.229.246-.466.55-.711.914-.237.356-.474.754-.711 1.194.034.61.072 1.197.114 1.764.042.568.08 1.13.114 1.689.043.567.072 1.143.09 1.726.025.584.037 1.198.037 1.841 0 1.49-.084 2.793-.254 3.91-.16 1.118-.372 2.049-.634 2.793-.254.754-.542 1.317-.863 1.689-.33.38-.656.571-.978.571-.186 0-.368-.076-.546-.228-.186-.153-.347-.377-.482-.673a4.268 4.268 0 0 1-.343-1.066 6.839 6.839 0 0 1-.14-1.46c0-.805.076-1.697.229-2.68a28.07 28.07 0 0 1 .647-3.02c.271-1.025.593-2.049.965-3.073a30.81 30.81 0 0 1 1.206-2.856v-1.27c0-.999.038-1.875.114-2.628.085-.762.178-1.396.28-1.904.101-.516.198-.901.292-1.155.101-.263.169-.394.203-.394Zm-.597 13.965c0-.745-.013-1.371-.038-1.879-.017-.5-.042-.956-.076-1.371a58.721 58.721 0 0 0-.09-1.219 46.35 46.35 0 0 1-.063-1.434 27.48 27.48 0 0 0-.9 2.336c-.28.837-.526 1.7-.737 2.59-.22.888-.39 1.785-.508 2.69-.127.906-.19 1.79-.19 2.654 0 .33.017.698.05 1.105.034.406.098.787.19 1.142.085.356.2.652.344.889.135.245.313.368.533.368.169 0 .326-.106.47-.317.143-.212.27-.504.38-.876a9.9 9.9 0 0 0 .28-1.32c.084-.5.152-1.042.203-1.626.05-.584.089-1.193.114-1.828.025-.635.038-1.27.038-1.904Z"
        fill="#000"
      />
      <path stroke="#000" strokeWidth=".4" d="M1 38.8h66M13 42.8h54M53 46.8h14M57 50.8h10" />
    </svg>
  );
};

export default Logo;
