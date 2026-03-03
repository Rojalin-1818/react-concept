import { useRef } from "react"
import  "./userefhook.css"
const UseRefHookTask1=()=>{
    const themeRef=useRef()
    const changeTheme=()=>{
            themeRef.current.classList.toggle("dark")
            console.log(themeRef.current.classList.value);
        }
    
    return(
        <div className='homepage demo remo' ref={themeRef}>
            <button onClick={changeTheme}>Theme</button>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolorum numquam est commodi vel assumenda quaerat deleniti sunt inventore. Fuga veritatis recusandae earum ad ut veniam nisi adipisci animi commodi.
            Magni, sed possimus? Cupiditate, natus tenetur! Sequi delectus facere, libero iusto omnis distinctio. Accusantium maiores doloremque dolor possimus unde laborum, quos, illum tenetur neque quam architecto soluta, qui nam ipsum?
            Libero nulla dolore nemo omnis, ad architecto nihil, a laborum quas qui blanditiis! Aut, esse dolorum. Mollitia exercitationem, sed, dolorem adipisci nisi eveniet voluptatem ratione repellat, dicta aliquid numquam delectus?
            Iure, totam ipsum maiores atque odit sed est quaerat aperiam sint ducimus. Aut reiciendis quaerat qui minima officia aspernatur tempore totam eaque ea! Provident dolorem quas iusto, temporibus atque adipisci?
            Architecto beatae sapiente assumenda et ea consequuntur adipisci, dignissimos, vero eaque accusantium cum eum. Alias, error laudantium? Exercitationem excepturi perspiciatis quidem in necessitatibus numquam, veritatis, praesentium totam facilis eius ab!
            Vitae suscipit facilis laboriosam animi officiis. Ut tempora itaque quis maxime doloribus esse adipisci non deleniti impedit delectus accusamus, quidem voluptate et voluptatum sapiente quasi repellat. Placeat ducimus molestias quas?
            Fugit earum debitis dolorum repellat? Sequi earum aliquam quod. Consectetur unde illo recusandae ratione delectus porro sequi, mollitia, nulla reprehenderit officiis enim quae dolorem laborum autem iusto excepturi eos nihil.
            Suscipit soluta officiis adipisci quo quasi. Distinctio, dolor expedita harum tempore veritatis qui optio atque illo id quisquam fugit labore earum eligendi! Velit vel ipsa voluptates, vero accusamus repellendus iure.
            Illum eaque, eius, labore necessitatibus laudantium recusandae, sunt nisi harum aliquid suscipit esse magni autem ex aspernatur ratione adipisci rerum assumenda. Perferendis ratione animi quo, obcaecati deserunt nulla modi molestias?
            Eaque modi eum dolor iusto itaque amet aperiam nostrum quia voluptas molestias veniam ab atque reprehenderit, et nulla blanditiis beatae earum laudantium fugiat nisi temporibus. Eaque nesciunt itaque consequatur. Laudantium?
            Assumenda ea ullam maiores vel minima exercitationem quibusdam, aliquam, perferendis inventore aperiam ducimus cumque laborum sed nihil consequatur repellat autem facere hic dolore ab eligendi? Natus beatae delectus quo saepe.
            Nostrum fugit eum sunt, quae possimus nulla sit iste voluptatibus vero earum harum quo cumque alias porro veniam perspiciatis facilis. Non fugiat esse officia voluptates minus dolores incidunt molestiae vero!
            Quis suscipit recusandae repellendus dolorem. Tempore earum autem iste nisi enim blanditiis maiores, soluta quo rem iusto magnam vel quas cupiditate ex illum provident explicabo. Ipsam natus consequuntur magnam ratione.
            Tempora, deleniti ab beatae, enim non excepturi necessitatibus iure veniam atque, placeat molestiae nesciunt aliquam accusamus velit adipisci possimus sunt corporis? Laudantium facilis, veritatis corrupti placeat illum dolore debitis cupiditate?
            Architecto, omnis. Ex similique tenetur quibusdam! Blanditiis neque beatae aliquam voluptatum quos voluptate ratione, incidunt explicabo perferendis! Facere dolorum assumenda temporibus magnam asperiores rerum tempora quis, enim quae maxime corrupti!
            Laborum dolor repudiandae qui quas nemo asperiores pariatur rerum quasi nam saepe blanditiis, sint minus perspiciatis quam amet dolorum cupiditate porro ipsa nobis ut quis. Ducimus autem velit eligendi ipsa.
            Repudiandae optio qui quaerat fugit unde enim, amet sapiente. Sit molestiae quam maiores animi repellat perferendis aut dolorem excepturi, at dolores. Fugiat porro cupiditate ipsum commodi deleniti molestias rerum aliquam.
            Totam illum dolorum quidem temporibus, reprehenderit inventore voluptatibus ducimus possimus dicta dignissimos est obcaecati, fugiat natus non consectetur veritatis eius nostrum sit placeat ea maiores! Sunt neque tempora animi culpa?
            Nulla, voluptates corrupti voluptatibus error saepe vitae aspernatur non quibusdam voluptate sapiente nihil eligendi, vel natus numquam. Perferendis harum culpa quisquam, minus porro odit quasi aperiam et. Corporis, ut debitis!
            Vel architecto odit eligendi, aliquam voluptate iusto ipsum magni explicabo obcaecati totam eveniet. Neque quos exercitationem sint, fugit soluta, nostrum excepturi reprehenderit expedita facilis sunt amet, voluptatem labore necessitatibus. Reprehenderit?</p>

        </div>
    )
}
export default UseRefHookTask1