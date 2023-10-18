from dataclasses import dataclass
from typing import TypeVar, TypeAlias


@dataclass(frozen=True)
class Academics:
    administrationId: str
    lastName: str
    firstName: str


# type Academics = {
#     administrationId: string;
#     lastName: string;
#     firstName: string;
# };

# class University<T> {
#     name: string;
#     academics: Array<T>;

#     constructor(name: string){
#         this.name = name
#         this.academics = new Array<T>;
#     }

#     addAcademic(academic: T): void{
#         this.academics = [...this.academics, academic]
#     }

#     removeAcademic(administrationId: string): void {
#         this.academics = this.academics.filter((academic) => {return academic.administrationId === administrationId})
#         //Property 'administrationId' does not exist on type 'T' !
#     }

#     getAcademic(administrationId: string): T | undefined {
#         return this.academics.find((academic) => {return academic.administrationId === administrationId})
#         //Property 'administrationId' does not exist on type 'T' !
#     }
# }
