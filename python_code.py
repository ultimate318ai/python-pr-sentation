from dataclasses import dataclass
from typing import Generic, TypeVar


@dataclass(frozen=True)
class Academics:
    administration_id: str
    last_name: str
    first_name: str


GenericAcademics = TypeVar("GenericAcademics", bound=Academics)


class University(Generic[GenericAcademics]):
    name: str
    academics: list[GenericAcademics]

    def __init__(self, name: str) -> None:
        super().__init__()
        self.name = name
        self.academics = []

    def add_academic(self, academic: GenericAcademics) -> None:
        self.academics.append(academic)

    def removeAcademic(self, administration_id: str) -> None:
        removed_student = next(
            filter(
                lambda academic: academic.administration_id == administration_id,
                self.academics,
            ),
            None,
        )
        if removed_student:
            self.academics.remove(removed_student)

    def get_academic(self, administration_id: str) -> GenericAcademics | None:
        return next(
            filter(
                lambda academic: academic.administration_id == administration_id,
                self.academics,
            ),
            None,
        )
