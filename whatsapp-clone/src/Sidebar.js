import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEBISFRUQEBUVEBUVFRAVFRUXFhUWFxUWFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0rLS0tLy0tLS0tLS0tKy0tLS0rLS0tLS0tLSstLS0rLS0tLS0rLSsrKy0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA9EAABBAADBgQDBgQFBQEAAAABAAIDEQQSIQUTMUFRYQYigZEUMnEHQlKhsdFicsHhFSNDkvAXM1Oywhb/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAJREAAgICAwEBAAICAwAAAAAAAAECEQMSEyExBEEiURRhBTKR/9oADAMBAAIRAxEAPwDyXIlu1bScBUWbdCndlLKr6TUix8ZVSelOkqTsWpGk9JUkgKFSak6dKx0RypZVNOix6IrypZVbSekWPjKcqWVXUkiyXEU5UsquSpKxcRTlSyq3KllTsXGVZUsqsITUixaEMqbKrCkixaFeVLKp0lSdi1IZUsqmlSLDUjSQapUlSVj1GpOlSVIChkk9JUnYUVkJsqtpKkWLUqpKlZSakCosStPSSgX0NaRKSVIASalYEqQOiukqVlJi1AtSFJUp5Ug1FiohScBFQQtvz+wXUuw+FEbLYQ0sDt4Mrsxy2QWkVV6VooynRDkX4caApK+UtkuSJmRt5SCTodeN8NNVVK3LzaR1Bsf29VIti1LxkUiiv8Nn0IgmIc0OaRFKQWng4EDUHqqXBsbg2YSNc75W5aPSzm5ICTSKkk6ZKySgxJ0kkWGrGpKlcMO+gcpo8CRV/TqlJh3tFlpARshUimkqTpk7JaCpKk6QCB8Y1JUnyp8pQHGRpLKpZU1IDjI5UsqlSSQuMjlSyp06YcZHKmyqSdFi4yGVLKpp0WLQjSVK7dJ9ylZbxFNJK3dJ90iw4ilOBavbEroodUWWRxAe7KYtK1zhwVW/DJbFr+dmWkZK/qjjhli4l2Vzh3Uo9mD64uESWMxGlWtyLbe/DYwHNk3RJfG57QCwGmht6aN43xPLguTdbzQF/RbewC2MkSF1ua5tAGm5rAJPbjQU5RVHPi7Zo+H9j4jaGJ+Hitxk1t5sMaPme+uOlanUkgc17T4P+yvDYCXfukdO7TI18ceRpy0SAQTdk1qOXFT+yHYTMNg9+Wje4gkudoTka4hgBHBvOupW9trxjgsK7JPiYo3fhc4ZvYahV7WWZGrqPiN1kYHC/c17LI2hsXCyy76XDxSSbsx53ta4lhu2OseYanQ9VHAbfimyPikbJG/7zSCO2o9PdDbe8SxYaMyPe2No++7ryDRxJ7BQ7IJHmH2k+A2YYOxmDFRCt9Dqd3emdn8HUcr000Xm6+g9l7fi2nA7L545o5YnWCCfKQQ4FeAGGtOmikn+M6HzzclTK1dggDI3Nwvh17KO6VkcHE8A0WSOPp3Q/C+XStnSOjGYcBbfLRsXdn6f2UXw6HNVV5r4Uuh274UaWjEYKcuw8tOLaDiwEWHXzHLlWiDwewomkGR0k1ahriMl9wOP0WXz9MTmjicfgXQuDXis8bJGd2SNzMPt+iHpdL40k3mJ6mOGNh+uriPTPXosQQLUnaN2OLcUDhikGIkQqe6RZYsbBcqVIrdpt2ix6MFIUMqN3abdIsWgHlTZEZukt0iw0BMiWRFbpLdIsNAXIpbtFCNTEaLGsYII0+7RgjUt0ix8RDdKQiR5iTCJQ2Nn+O0AGBPuEdu0siNg/wAcCEKsZCiMik0osccKRARp8qkSolRLWkRcwLntv4XI4SD5XaO7H+66KlGSIOBa4WDxCnGWrsyfT86zQcf38OShdl1BV4l4fkn2ls10Pmbbmdebezv3Qsci0e9o83PHLHLWS7Pov7Jdrtl2cyMnzQPex/8AuzNPsfyK878XeGzgdoOxk+HOKw8sj31rldnzUHcdWkg0RRoLmPDXieTASZ2WWPAbMwfeAsgj+IWa+pXr2xNvsxbA9kmYHoarsRyPZVauLsVpqir7PfCcrWvxIj+HjnijDIXkBznNzEzuYwZYi4OAyjkLPGlm+LfC+Oe+RvxTWtnjMZa6PP5HPDi1puhwAvKDQ4rbxfibGwtazDNil3dtc2XOCRyOdvAj6UeyyMFisXLI/GY8sacuSKNthjG3Z1d8xJAN8KaO6Ld2FdEtnNi2RgnEEncRSSEu8pfIQco7W4tC8ci215vM0ObwHI0NBddls/aJ4s+MfuYSdxGeP/kd+L+UcvfouLCtjjX6LkcX/FnYQ7UwslAskY46DKQ4X0pyp2lMASxp0adT1PVZWxYaJmP+n8vdxH9Ab9k2MmrVR0W1IslnnKNSZo7I8W4rAuPw8nkdeeN4zRknnXI/QhbH/UPES0yOGGNztMzcxOunlBNA687XBF1rT2M7Jmluixvl4fM7Rp16alTlji1bXZVGTs6gx3qTZOpN2STxJKcMCz8Nt0O0lHqKBHpzWuxocMzSCDwIWaSa9PQ/NnxZf4x9/opypZVfu027UbN3EU5Esiu3aWRFi4yjIlu1fkSyIsOMp3aYsV+VLKixPGgfInEav3acRo2FoUbtO2JEtiVjIj0ScxNJA7YFLcIwR9k+6PRQ3K3QHZStPSkpHQpkElMpqQFEUlJKkCohSWVTypZUWPQrpPSnSVIsjoVltrnNsbKMdyRjy/eb+HuOy6ekxapxm4sz/T8cc8afv4zhGyXpr+SuwMs0Dt5BIWO5EGrHcc0btvZW6O8YPITqPwn9l1X2f/Z/JtGpHHJEKJdrRvWh1PbktDmkrPLZcE8c3CSMSPx9jGfNu3OH3i0gn65SAfZA7W8RY3H+V7nub+CNpDfWrJ9V9FYP7MtmsaGnDte4fffZd6cgjGeB8K3RuZo6A0orLH+iuv8AZ8uR+H8W7hh5v9rh+q6Xw34EMgEmNcYWuJyMrzvDTTnEVo29AeevRfQ0PhTCs1LS7+Yn9FznjE4WGT/NYf8AstEYbYaAC/oQOJVP0/RKMHr6XfPjUsis8o8a7CjwTINwSY5RI6+/kr8gSuExhsr2DxPhvjMBlYPPC1rou+TiB9WEj2XjUpsqXxT3h36vQ+mOsypaGQ/DBzeG/Ik6g5Rk16fOs9b/AIcwplhxYIOVmGc8/wAzCHN/9XLVJ0rM6VmNG7vwW7szHOY3Nbi26a0ak+izNnbKlnNMaa5uOjR6/wBFqYjY2JiIZFbmg21wyjWqP05qE3F9Nl+PBlreKdG5s7GiZtgEEGnAiiCirQmx4ZQ3/O48hpf1JB1NCloiJYptJ9HqfhlkeFcvv+/6KfRL0RbYlIwqG5qckBeiQ+iM3Slu0bi2QK1v8KtaP4UVGxWhireQqcgQAfhUg0dEc1gVjYwoPIVOQAGjomLStQRBPuQocpU22ZJaU1HutY4cKBwqfKitpmBkSyIvdJxCtG51HJAeRLIjdwn3CXIGwDkSMaO+HKfcdkciFugARp92Votw6f4dLlQuQzt2UjGVo/D9k/w6XKHIZm7KbdrUGH7JHDI5RcplSQ2KIsEUQeYXq32VztGCbAOMD3tP0JzMv0NX/CvPDh1ueD8ccNiBZpkvkf8A/J9D+pU45fww/fiWbHa9R7A1yTngIVs2iFmn7q9M83qEyTrmPGML3xZ4mNc9po5gCQ0njr0IH5rXfMhZJPbn/dRnHZUyyEtHaPNMLizEDFI5uYOJGXodarlRXD+IfDZkc6bDgebV0fCzzLeWvRdZ4x2V8NLcURLXneB9khoLvM2uGn7KqJ9DQXw7eqqg3idovyRWQ89w/hzEuNGItF6l1ABd5sbZjMPC6Eea2u3hr5iQbsdOVK0y27SqvU/srME/M51cAw+9gf1KlmzymqfSD58UVNFbYq4BLdo4RJCFZ+Q9DtXgEIlYyEo1sKsbCoPIReQEEKfdI3dpt2o8hDcE3SiY0eIk26S5A3A2xKxsSLESsbEk8hBzBBGrBGihGp7pQcyDkCCNPkVOK2mxltb5iOPQeqAn2k92nyjtx91ZGEn2Rs1CxOLWG3EEfed7lS+Lf+J3upPCxhu4UhAr5sVEw05ws66Wf0UYsfA7/UaOxNH81C5VdFzzEBCptgRzYwdRwVgiVbyCeUBECQgWhukt2o7keUA3KfdI7dpbtG4coBuU+5R27TbtG4uUCEKRhRuRLdo3FyAO4S+HR4jTiNG4cp0mwNrF8YY4+Zgo9xyKOlxHdcjDbTmboQin480t/wA2dS/i/Tl/Ri1e0fDdM6ElnWazGpviLW1IxtmJ9oLM8AO8yZXnmRYINjiO3suXjxA3TWjWmDMbAvThaP8AHuIbiHMwzSDu3Z5aPC9AD6XosDFuFbtnDgapQnFPosjNqJdDOX+Rp0AI+oJ/st/Y2G0LuWjW+l3+dLI2NgiTkaPM89OAH3j2C7SHDBjQ0cGigsX05VH+KNvywt7sFESkIUWIlIRrFudDcFESfdovdoXF4pkX/cJbfB1EgnppzSTcnSIuQNPio2DMXDtRF+yr/wASg/8AIPZ37Ln9qYgSPLwGjuAW5u5BJ1We5/cfmt0fmTXZS8zR2mHxsTyQ1w0A46X9LRTAHCxqOq4WCWiDTTRuiCQfqLXaYHacclNabcfuta4UPXQAfVU58OncRwy7ehAYmbKwnKHNvpmFoPbG0xHcTQS4t1PANsafUrmg5Rx4HNWxuZ2U+Ijj+d7W9idfbisram22ZMsLrc7QmnDKOuo4rBleTZJJJ4k8Sh1oh8sV2yDmWterAVS1qOwUd6ngFfJ0hx7ZAJ0RI17j8unKh/VQOGf+H8woqSLqf4YTMcRQoED6ps1i+ZOqHCfMtFHPc2/QqLEub8rnCuFEhdTsPxBnqObQnRr9KP8AN0Pdcc0o7dUwONU7h/foqcuKM1TFGTR3f+IxbzdZvNw4eW+l9U0+04mZ/MCYxbmjiT0F8SuTw8zXAAkZj/zipyNbxKy/4sbNMWvWdRsnaLcQCQC0t+ZprQcjfRHuoDMSAALJPCvquEAbwDgL468fqjYpXCPdA2zNm/t9OaUvnV2gfb6OxEd6hLdLm8FteWOm6Oa0VRGtAcAUfPtwkN3ba1t4P6A/1VbxSRFxkam5TbpB/wCNNzO0OXL5NNSdND2/ZRj23qA6M/xEa13ArVR0f9BUg8RpbtRZj2OOmaq40ePRXiVnUfmqZdfg+yrIn3aTsSLaBqCdTror2vaVU212PsDkww46iui49/iKSRtRDIT9404j+UcLXeSsDg5umrSPcLw/aW1ZoHOiDA0xuc0l2rtDQscAfddb/j5zyJq//TD9MYxp0dBkyA1mtxt7vvEnUm+qBfi4Yic0jbBGgOY9ya91yeK2hLJo97iOl0PYaI3wts34nFQwkaPkGb+UeZ1+gK6XCoxcpMzclukj1/w3s/LEJDq6VoN9G/dGvutfdIpmU6CtOA7KnEYgMANXbqpeYnklObZ2YdKiG75n1WdJtIAjK0kfeJ09lMYkutrjo79+SZ0DVZGCX/Yewc5oAvlV32WRjMfFKx7I5BmykjR16CzVgC6BT4nGPDcrXltCgRVj1XLY2Mg0XXfX9VfgwX22RlMGcw879VDdUiYwAFTM/oukmyt0ijP6LsfDePZu8rsrS08b+bnqa0K403YJRuEnrTkVDPjU40RhKmF7RlzyvcODnGvpwH5BUtYXHK0WSrZI1bhzlo9/+fqorqNItXbBcTEW6ObR5d1TCyzqtLaTs1D2Q0UdUnGT17G1/LolE2wQ0auPHoOiNwcGVv14q7DBoFc+aKVE5vw0Y4fpWW2KPOvUJKZTKmzQjizgXcgmxGHNjRa0M4Ksfl5ro7s5nFGujCyHhV+62oWZ4S0DlQ9OCkXMYC41X69lVFtJuU00gjgDWqjJt+CSUPQI2zQiioyTOcbcf29k2pJJ1s6p3N6KwqLIiVq7O1B7EH/nssljkfFIGNAuzK3XlWtD+qrmrJwC5sYLpgH1I/QIrBvDuJAI6Xr6LMyHoi8Mwg8R5uVKmUVRapMNmiZ+JWQwNI4qtkDidf8A1RrcEeN/kqJSrqx2NFhhel+hRIiPUqtsDm8HKxzncj7qmTbfoWSEfPVWtb9UM+cMGaSQNA5uIaPcrNxni7Cw/wCoZD0YL/M6JLHOXiIuaXrN2NtFc94n8N4fFOzhjTLVODXFr3Adho4jpVoeX7QIwLZC8nlnc1ovvVrjJPEkzS7zBxLsxd5uJ6LZ8vzZoy28M2fLBqmHDwrhro7wEcQXhpH1BFhdR4Q2HFA50kUYFNLS63Ocb5ZjwFdOK4qbxjPIBbYiQKzFriT9bK1vC3ih0D3tmc50cpzXV7t3Mho+7QGg6LZnhmljaTM2HRTVnob7uwFCeO6VbJTIA5jwWuFgg2COxVjGH8Wq4tV6dRMp+GPRU4xrh5QDqOSMYHji4UqMRGXG75KcZO+wZnbh1ag8FnTQ2/XgAuibG4ClkYuEhzitGPJbojRhlqHkatN0BVbsOtakiLjZlmzolHG5aIgAV8TAm5kVjCsIzOwHnVH0RDcJwvko4RwB/VaLIyseSbTNcIpoCdggTqpDBgLRbCkYlTyst1iAtgCsyIrIE2VLeySSB92luVfSdLYlZxUDSrpgcvt+v91FuJH4deWqrfiXO0oD6fuur2znJ9A8xLqbeg4dymY1WNjVzYuyd0VuNuyjKVKlfuieSIZhtFFyBRBIo7IB5o0QZsg5gEE+qtjhArsiGMVcplijRYIj0U4ozYOU6LYwwY4AAi6H14aon4ULFLNXTGARYrXVpR7TzpRGGAVgFeipk0/BDP1XK+M9uOwjWtirPJep1ytHOupJ/Jau0NvQxaZs7vwt19zwC888TYt+Jl3uUDyhrWg3QF8+psrZ8eBuVyXRTmyVGo+mPjdpSSHNK9zyebiT7dPRBjFjoVHEijR49EOX/RdyMVXRzm3+mlHigNTwB562q8RiA8k16V0QBlKYvRoR2NHDPDT8oPt+SLiYDR53eixWzEIlmOP0I5hJwY1I6vZ2PfAbhfl11aXEsd2c3h6rs9keJIpfLJUbxpqbbf15evuvKI8V3Wlg58xsn15rHn+WM136acWZrpHswIIvjfBWNrovNtmbckhrK8lvTiPZaH/66S78tdKC5kviyJ9Gvnj+ndghAYuEGzXFcfF4jkzZ879eV+X/AG8F02w9sR4vyHySgfLyd3af6cVXL554v5EoZYvop+FGtD8if0Q0uHXTtgy1Xe0LicOMxPXiow+jsvOXfhdU3w63JMGFX8KFpWcKMYRlbezcQHNDT8zR7jkVScMFAsymxxUZyU1ROKNNzlWXoBuIcOJtWNktU8VFqCM6gXqpygpaokX7xPvAh6Tp6oLOeOG7JfD9kklu2ZjLI8P2VhYAkko22xNEXFIWmSTYUXMatLCYclJJUZZNIdGhHhgFLG7UZAP8x2vICi4+iSSzwipypil0YGM8XnhGxo7u8x9hosXG7akl+d7j2uh7DRMkunHBjh4jPKTMibGdFm4nFlOktcEjJOTMrFWTaHpJJaI+GZ+jJJJKRESSSSAJts8FpYZxaAkkq5lsEGMnUjiEklXSLbJMm5gqyLEua4OaSHNNtI0II4EJJJNIaPStgeLop2BszmslAo3o1/dp5X0W3LICkkuF9WCOOdxOjgk5R7BHvVL3p0lXFGpIoe9UPckkroomkUucoskI4JJK1IdEviXdlAYh3ZJJPVAFQTh2nAq7KmSVMlTI2f/Z" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
